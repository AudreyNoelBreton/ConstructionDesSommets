/** @vitest-environment node */

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import request from "supertest";
import { vi } from "vitest";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { createApp } = require("./server.js");

const allowedOrigin = "https://habitationsdusommet.com";

function createTestApp(options = {}) {
  const uploadDirectory = fs.mkdtempSync(
    path.join(os.tmpdir(), "construction-des-sommets-test-")
  );
  const logger = {
    error: vi.fn(),
    warn: vi.fn(),
  };
  const app = createApp({
    env: {
      NODE_ENV: "test",
      CORS_ORIGINS: allowedOrigin,
      SMTP_HOST: "smtp.example.test",
      SMTP_PORT: "587",
      SMTP_USER: "sender@example.test",
      SMTP_PASSWORD: "test-password",
      EMAIL_FROM: "sender@example.test",
      EMAIL_TO: "inbox@example.test",
    },
    uploadDirectory,
    logger,
    ...options,
  });

  return { app, logger };
}

function validQuoteRequest(app, email = "alex@example.com") {
  return request(app)
    .post("/send-email")
    .set("Origin", allowedOrigin)
    .field("nom", "Alex Exemple")
    .field("numero", "555-0100")
    .field("lieu", "Québec")
    .field("resume", "Rénovation d'une maison")
    .field("delais", "Été")
    .field("courriel", email);
}

describe("Express quote request server", () => {
  let apps;

  beforeEach(() => {
    apps = [];
  });

  afterEach(async () => {
    await Promise.all(apps.map((app) => app.locals.cleanupUploads()));
  });

  function registerApp(options) {
    const { app, logger } = createTestApp(options);
    apps.push(app);
    return { app, logger };
  }

  test("sends a validated quote request and removes its temporary attachment", async () => {
    const transporter = { sendMail: vi.fn().mockResolvedValue({}) };
    const { app } = registerApp({ transporter });
    const response = await validQuoteRequest(app).attach(
      "plan",
      Buffer.from("%PDF-1.7\nplan"),
      { filename: "../plan.pdf", contentType: "application/pdf" }
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Quote request sent." });
    expect(transporter.sendMail).toHaveBeenCalledTimes(1);

    const message = transporter.sendMail.mock.calls[0][0];
    expect(message).toMatchObject({
      from: "sender@example.test",
      to: "inbox@example.test",
      replyTo: "alex@example.com",
      subject: "Demande de soumission",
    });
    expect(message.text).toContain("Nom: Alex Exemple");
    expect(message.attachments[0].filename).toBe("plan.pdf");
    expect(fs.existsSync(message.attachments[0].path)).toBe(false);
  });

  test("rejects an origin outside the configured allowlist", async () => {
    const transporter = { sendMail: vi.fn() };
    const { app } = registerApp({ transporter });
    const response = await request(app)
      .post("/send-email")
      .set("Origin", "https://untrusted.example");

    expect(response.status).toBe(403);
    expect(transporter.sendMail).not.toHaveBeenCalled();
  });

  test("rejects invalid fields and invalid email addresses", async () => {
    const transporter = { sendMail: vi.fn() };
    const { app } = registerApp({ transporter });
    const response = await validQuoteRequest(app, "not-an-email").attach(
      "plan",
      Buffer.from("%PDF-1.7\nplan"),
      {
        filename: "plan.pdf",
        contentType: "application/pdf",
      }
    );

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      error: "Invalid quote request or plan attachment.",
    });
    expect(transporter.sendMail).not.toHaveBeenCalled();
  });

  test("rejects a file with a valid extension and MIME type but invalid signature", async () => {
    const transporter = { sendMail: vi.fn() };
    const { app } = registerApp({ transporter });
    const response = await validQuoteRequest(app).attach(
      "plan",
      Buffer.from("not a PDF"),
      { filename: "plan.pdf", contentType: "application/pdf" }
    );

    expect(response.status).toBe(400);
    expect(transporter.sendMail).not.toHaveBeenCalled();
  });

  test("does not send email when SMTP is not configured in development", async () => {
    const { app } = registerApp({
      env: {
        NODE_ENV: "development",
        CORS_ORIGINS: allowedOrigin,
      },
    });
    const response = await validQuoteRequest(app).attach(
      "plan",
      Buffer.from("%PDF-1.7\nplan"),
      { filename: "plan.pdf", contentType: "application/pdf" }
    );

    expect(response.status).toBe(503);
    expect(response.body).toEqual({
      error: "Email delivery is not configured.",
    });
  });

  test("rejects unsupported file types and files larger than 10 MB", async () => {
    const { app } = registerApp({ transporter: { sendMail: vi.fn() } });
    const unsupported = await validQuoteRequest(app).attach(
      "plan",
      Buffer.from("plain text"),
      { filename: "plan.txt", contentType: "text/plain" }
    );
    const oversized = await validQuoteRequest(app).attach(
      "plan",
      Buffer.alloc(10 * 1024 * 1024 + 1, 0x61),
      { filename: "plan.pdf", contentType: "application/pdf" }
    );

    expect(unsupported.status).toBe(400);
    expect(oversized.status).toBe(413);
  });

  test("does not return SMTP error details to the client", async () => {
    const transporter = {
      sendMail: vi.fn().mockRejectedValue(
        Object.assign(new Error("private SMTP response"), { code: "EAUTH" })
      ),
    };
    const { app, logger } = registerApp({ transporter });
    const response = await validQuoteRequest(app).attach(
      "plan",
      Buffer.from("%PDF-1.7\nplan"),
      { filename: "plan.pdf", contentType: "application/pdf" }
    );

    expect(response.status).toBe(500);
    expect(response.text).not.toContain("private SMTP response");
    expect(logger.error).toHaveBeenCalledWith("Quote email delivery failed.", {
      code: "EAUTH",
    });
  });

  test("requires explicit production origins and SMTP configuration", () => {
    expect(() =>
      createApp({
        env: { NODE_ENV: "production" },
      })
    ).toThrow("CORS_ORIGINS must list the allowed browser origins in production.");

    expect(() =>
      createApp({
        env: {
          NODE_ENV: "production",
          CORS_ORIGINS: allowedOrigin,
        },
      })
    ).toThrow("SMTP settings must be configured in production.");
  });

  test("limits quote requests to five per IP in fifteen minutes", async () => {
    const { app } = registerApp({ transporter: { sendMail: vi.fn() } });
    const responses = [];

    for (let index = 0; index < 6; index += 1) {
      responses.push(
        await request(app)
          .post("/send-email")
          .set("Origin", allowedOrigin)
      );
    }

    expect(responses.slice(0, 5).every((response) => response.status === 400)).toBe(
      true
    );
    expect(responses[5].status).toBe(429);
  });
});