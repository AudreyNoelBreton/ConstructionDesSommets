import { spawn } from "node:child_process";

const args = ["run", ...process.argv.slice(2).filter((arg) => arg !== "--watchAll=false")];
const child = spawn(process.execPath, ["node_modules/vitest/vitest.mjs", ...args], {
  stdio: "inherit",
});

child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  else process.exit(code ?? 1);
});
