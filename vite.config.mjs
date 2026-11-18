import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  base: "/",
  plugins: [react(), legacy({ targets: [">0.2%", "not dead", "not op_mini all"] })],
  define: { "process.env.PUBLIC_URL": JSON.stringify("") },
  build: { outDir: "build", emptyOutDir: true },
  test: { environment: "jsdom", globals: true, setupFiles: "./src/setupTests.js" },
});
