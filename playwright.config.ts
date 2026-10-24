import { defineConfig, devices } from "@playwright/test";

const nodeProcess = (
  globalThis as typeof globalThis & {
    process?: { env?: { E2E_PORT?: string } };
  }
).process;
const port = nodeProcess?.env?.E2E_PORT ?? "4173";
const baseURL = `http://127.0.0.1:${port}`;

export default defineConfig({
  testDir: "./e2e",
  use: {
    baseURL,
    permissions: ["clipboard-read", "clipboard-write"],
  },
  webServer: {
    command: `npm run dev -- --host 127.0.0.1 --port ${port}`,
    url: baseURL,
    timeout: 120000,
    reuseExistingServer: true,
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
