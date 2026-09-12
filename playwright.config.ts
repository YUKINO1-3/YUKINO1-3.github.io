import { defineConfig } from "@playwright/test";

// Also inherited by the build-validation tests' child processes.
process.env.MILESTONE_CONTENT_DIRECTORY = "./tests/fixtures/milestones";

export default defineConfig({
  testDir: "tests/e2e",
  // Build-validation tests temporarily add content fixtures to the shared collection.
  workers: 1,
  use: {
    baseURL: "http://127.0.0.1:4321",
  },
  webServer: {
    command: "pnpm build && pnpm preview",
    env: {
      NOTE_CONTENT_DIRECTORY: "./tests/fixtures/notes",
      WORK_CONTENT_DIRECTORY: "./tests/fixtures/works",
    },
    url: "http://127.0.0.1:4321",
    reuseExistingServer: !process.env.CI,
  },
});
