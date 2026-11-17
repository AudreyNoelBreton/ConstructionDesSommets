const fs = require("fs");
const os = require("os");
const path = require("path");
const cors = require("cors");
const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const multer = require("multer");
const nodemailer = require("nodemailer");

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const MAX_FIELD_LENGTHS = {
  nom: 120,
  numero: 40,
  lieu: 200,
  resume: 4000,
  delais: 200,
  courriel: 254,
};
const ALLOWED_FILE_TYPES = {
  ".pdf": "application/pdf",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
};

function parseInteger(value, name, fallback, minimum, maximum) {
  if (value === undefined || value === "") {
    return fallback;
  }

  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < minimum || parsed > maximum) {
    throw new Error(`${name} must be an integer between ${minimum} and ${maximum}.`);
  }
  return parsed;
}

function readConfig(env) {
  const port = parseInteger(env.PORT, "PORT", 3001, 1, 65535);
  const proxyHops = parseInteger(env.TRUST_PROXY_HOPS, "TRUST_PROXY_HOPS", 0, 0, 10);
  const smtpValues = [
    env.SMTP_HOST,
    env.SMTP_PORT,
    env.SMTP_USER,
    env.SMTP_PASSWORD,
    env.EMAIL_FROM,
    env.EMAIL_TO,
  ];
  const hasSmtpConfig = smtpValues.some(Boolean);
  const smtpConfigured = smtpValues.every(Boolean);

  if (hasSmtpConfig && !smtpConfigured) {
    throw new Error(
      "SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, EMAIL_FROM, and EMAIL_TO must be configured together."
    );
  }
  if (
    smtpConfigured &&
    (!isValidEmail(env.EMAIL_FROM) || !isValidEmail(env.EMAIL_TO))
  ) {
    throw new Error("EMAIL_FROM and EMAIL_TO must be valid email addresses.");
  }
  if (smtpConfigured && /\s/.test(env.SMTP_HOST)) {
    throw new Error("SMTP_HOST must be a hostname without whitespace.");
  }

  const smtpPort = smtpConfigured
    ? parseInteger(env.SMTP_PORT, "SMTP_PORT", undefined, 1, 65535)
    : undefined;
  let smtpSecure = smtpPort === 465;

  if (env.SMTP_SECURE !== undefined) {
    if (env.SMTP_SECURE !== "true" && env.SMTP_SECURE !== "false") {
      throw new Error("SMTP_SECURE must be true or false.");
    }
    smtpSecure = env.SMTP_SECURE === "true";
  }

  const configuredOrigins = env.CORS_ORIGINS
    ? env.CORS_ORIGINS.split(",").map((origin) => origin.trim()).filter(Boolean)
    : [];
  const isProduction = env.NODE_ENV === "production";

  if (isProduction && configuredOrigins.length === 0) {
    throw new Error("CORS_ORIGINS must list the allowed browser origins in production.");
  }
  if (isProduction && !smtpConfigured) {
    throw new Error("SMTP settings must be configured in production.");
  }

  const allowedOrigins = configuredOrigins.length
    ? configuredOrigins
    : ["http://localhost:3000", "http://127.0.0.1:3000"];

  for (const origin of allowedOrigins) {
    let parsedOrigin;
    try {
      parsedOrigin = new URL(origin);
    } catch {
      throw new Error("CORS_ORIGINS must contain valid origin URLs.");
    }

    if (
      parsedOrigin.origin !== origin ||
      (isProduction && parsedOrigin.protocol !== "https:")
    ) {
      throw new Error("CORS_ORIGINS must contain exact HTTPS origins in production.");
    }
  }

  return {
    allowedOrigins: new Set(allowedOrigins),
    emailFrom: env.EMAIL_FROM,
    emailTo: env.EMAIL_TO,
    port,
    proxyHops,
    smtpConfigured,
    smtpHost: env.SMTP_HOST,
    smtpPassword: env.SMTP_PASSWORD,
    smtpPort,
    smtpSecure,
    smtpUser: env.SMTP_USER,
  };
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validateFields(body) {
  const fields = {};

  for (const [name, maximumLength] of Object.entries(MAX_FIELD_LENGTHS)) {
    const value = body[name];
    if (
      typeof value !== "string" ||
      value.trim().length === 0 ||
      value.length > maximumLength
    ) {
      return null;
    }
    fields[name] = value.trim();
  }

  return isValidEmail(fields.courriel) ? fields : null;
}

async function hasExpectedFileSignature(file) {
  const bytes = await fs.promises.readFile(file.path);
  const extension = path.extname(file.originalname).toLowerCase();

  if (extension === ".pdf") {
    return bytes.subarray(0, 5).toString("ascii") === "%PDF-";
  }
  if (extension === ".png") {
    return bytes.subarray(0, 8).equals(
      Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])
    );
  }
  if (extension === ".jpg" || extension === ".jpeg") {
    return bytes.subarray(0, 3).equals(Buffer.from([0xff, 0xd8, 0xff]));
  }
  return false;
}

async function removeUpload(filePath, logger, message) {
  try {
    await fs.promises.unlink(filePath);
  } catch (error) {
    if (error.code !== "ENOENT") {
      logger.warn(message);
    }
  }
}

async function processQuoteRequest(req, res, { config, logger, transporter }) {
  const fields = validateFields(req.body);
  let validFileSignature = false;
  try {
    validFileSignature =
      Boolean(req.file) && (await hasExpectedFileSignature(req.file));
  } catch (error) {
    if (req.file) {
      await removeUpload(
        req.file.path,
        logger,
        "Unable to remove a rejected quote plan upload."
      );
    }
    throw error;
  }

  if (!fields || !req.file || !validFileSignature) {
    if (req.file) {
      await removeUpload(
        req.file.path,
        logger,
        "Unable to remove a rejected quote plan upload."
      );
    }
    res.status(400).json({ error: "Invalid quote request or plan attachment." });
    return;
  }

  try {
    if (!transporter) {
      res.status(503).json({ error: "Email delivery is not configured." });
      return;
    }

    const safeFilename = path
      .basename(req.file.originalname)
      .replace(/[^a-zA-Z0-9._-]/g, "_")
      .slice(0, 128);

    await transporter.sendMail({
      from: config.emailFrom,
      to: config.emailTo,
      replyTo: fields.courriel,
      subject: "Demande de soumission",
      text: [
        `Nom: ${fields.nom}`,
        `Numéro de téléphone: ${fields.numero}`,
        `Lieu des travaux: ${fields.lieu}`,
        `Résumé du projet: ${fields.resume}`,
        `Début des travaux souhaité: ${fields.delais}`,
        `Courriel: ${fields.courriel}`,
      ].join("\n"),
      attachments: [{ filename: safeFilename, path: req.file.path }],
    });
    res.status(200).json({ message: "Quote request sent." });
  } catch (error) {
    logger.error("Quote email delivery failed.", {
      code: error && error.code ? error.code : "UNKNOWN",
    });
    res.status(500).json({ error: "Unable to send the quote request." });
  } finally {
    await removeUpload(
      req.file.path,
      logger,
      "Unable to remove a processed quote plan upload."
    );
  }
}

function createApp(options = {}) {
  const env = options.env || process.env;
  const config = readConfig(env);
  const logger = options.logger || console;
  const transporter =
    options.transporter ||
    (config.smtpConfigured
      ? nodemailer.createTransport({
          host: config.smtpHost,
          port: config.smtpPort,
          secure: config.smtpSecure,
          auth: {
            user: config.smtpUser,
            pass: config.smtpPassword,
          },
        })
      : null);
  const uploadDirectory =
    options.uploadDirectory ||
    fs.mkdtempSync(path.join(os.tmpdir(), "construction-des-sommets-"));

  fs.mkdirSync(uploadDirectory, { recursive: true, mode: 0o700 });

  const upload = multer({
    dest: uploadDirectory,
    limits: {
      fileSize: MAX_FILE_SIZE,
      files: 1,
      fields: Object.keys(MAX_FIELD_LENGTHS).length,
      fieldSize: Math.max(...Object.values(MAX_FIELD_LENGTHS)),
      parts: Object.keys(MAX_FIELD_LENGTHS).length + 1,
    },
    fileFilter: (req, file, callback) => {
      const extension = path.extname(file.originalname).toLowerCase();
      if (ALLOWED_FILE_TYPES[extension] !== file.mimetype) {
        callback(new Error("Unsupported plan file type."));
        return;
      }
      callback(null, true);
    },
  });
  const app = express();

  app.disable("x-powered-by");
  if (config.proxyHops > 0) {
    app.set("trust proxy", config.proxyHops);
  }
  app.use(helmet());
  app.use((req, res, next) => {
    const origin = req.get("origin");
    if (origin && !config.allowedOrigins.has(origin)) {
      res.status(403).json({ error: "Origin not allowed." });
      return;
    }
    next();
  });
  app.use(
    cors({
      origin: (origin, callback) => {
        callback(null, Boolean(origin && config.allowedOrigins.has(origin)));
      },
      methods: ["POST"],
      allowedHeaders: ["Content-Type"],
    })
  );
  app.use(express.json({ limit: "10kb" }));
  app.use(express.urlencoded({ extended: false, limit: "10kb" }));

  const requestLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: "Too many requests. Please try again later." },
  });

  app.post("/send-email", requestLimiter, upload.single("plan"), (req, res, next) => {
    processQuoteRequest(req, res, { config, logger, transporter }).catch(next);
  });

  app.use((req, res) => {
    res.status(404).json({ error: "Not found." });
  });

  app.use((error, req, res, next) => {
    if (res.headersSent) {
      next(error);
      return;
    }
    if (error instanceof multer.MulterError) {
      const status = error.code === "LIMIT_FILE_SIZE" ? 413 : 400;
      res.status(status).json({ error: "Invalid or oversized plan upload." });
      return;
    }
    if (error.type === "entity.too.large") {
      res.status(413).json({ error: "Request body is too large." });
      return;
    }
    if (error instanceof SyntaxError && error.status === 400) {
      res.status(400).json({ error: "Invalid request body." });
      return;
    }
    if (error.message === "Unsupported plan file type.") {
      res.status(400).json({ error: "Unsupported plan file type." });
      return;
    }
    logger.error("Unhandled server request error.");
    res.status(500).json({ error: "Internal server error." });
  });

  app.locals.uploadDirectory = uploadDirectory;
  app.locals.cleanupUploads = () =>
    fs.promises.rm(uploadDirectory, { recursive: true, force: true });
  app.locals.port = config.port;
  return app;
}

if (require.main === module) {
  const app = createApp();
  const server = app.listen(app.locals.port, () => {
    console.log(`Server is running on port ${app.locals.port}`);
  });
  const shutdown = () => {
    server.close(async () => {
      await app.locals.cleanupUploads();
    });
  };
  process.once("SIGINT", shutdown);
  process.once("SIGTERM", shutdown);
}

module.exports = { createApp };
