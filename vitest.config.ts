import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.{test,spec}.{js,ts,jsx,tsx}"],
    exclude: ["node_modules", "test/e2e/**/*", "dist"],
    passWithNoTests: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    globals: true,
  },
});
