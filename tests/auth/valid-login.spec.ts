import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';

test.describe('Authentication', () => {
  test('Valid login with username and password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!);

    const dashboardPage = new DashboardPage(page);
    await dashboardPage.verifyLoaded();
    await expect(page.getByRole('heading', { name: 'Welcome to Autoinspekt' })).toBeVisible();
  });
});
