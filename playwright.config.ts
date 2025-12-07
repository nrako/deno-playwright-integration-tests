import { defineConfig, devices } from '@playwright/test'

const isDeno = typeof (globalThis as unknown as { Deno?: unknown }).Deno !== 'undefined'

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.ts',
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:3000',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  webServer: {
    command: isDeno ? 'deno task serve' : 'npx serve app -p 3000',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
  },
})
