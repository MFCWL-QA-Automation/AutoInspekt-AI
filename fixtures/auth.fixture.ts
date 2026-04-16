import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

type AuthFixtures = {
  loggedInPage: Page;
};

export const test = base.extend<AuthFixtures>({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      process.env.TEST_USERNAME!,
      process.env.TEST_PASSWORD!
    );
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.verifyLoaded();
    await use(page);
  },
});

export { expect } from '@playwright/test';
