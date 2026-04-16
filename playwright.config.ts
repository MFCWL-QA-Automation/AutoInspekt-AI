import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers: 1,
  timeout: process.env.CI ? 90000 : 60000,
  retries: process.env.CI ? 1 : 0,
  reporter: [['html'], ['allure-playwright']],
  use: {
    baseURL: process.env.BASE_URL || 'https://aiv3portal.ibbtrade.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    navigationTimeout: process.env.CI ? 60000 : 30000,
    actionTimeout: process.env.CI ? 60000 : 15000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
