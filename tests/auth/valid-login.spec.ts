import { test, expect } from '@playwright/test';

test.describe.skip('Authentication', () => {
  test('Valid login with username and password', async ({ page }) => {
    // Step 1: Navigate to the portal
    await page.goto('https://aiv3portal.ibbtrade.com/');

    // Expect: Redirected to login page
    await expect(page).toHaveURL('https://aiv3portal.ibbtrade.com/login');

    // Expect: Correct page title
    await expect(page).toHaveTitle('AutoInspekt (Ver 2.0) - Login');

    // Expect: 'Portal Log In' heading is visible
    await expect(page.getByRole('heading', { name: 'Portal Log In' })).toBeVisible();

    // Step 2: Verify 'Username' radio is selected by default
    const usernameRadio = page.getByRole('radio', { name: 'Username' });
    await expect(usernameRadio).toBeChecked();

    // Step 3: Fill username
    const usernameField = page.getByRole('textbox', { name: 'Username / Email Address /' });
    await usernameField.fill('23294629');
    await expect(usernameField).toHaveValue('23294629');

    // Step 4: Fill password
    const passwordField = page.getByRole('textbox', { name: 'Password' });
    await passwordField.fill('Test@123');

    // Step 5: Click the Log In button
    await page.getByRole('button', { name: 'Log In' }).click();

    // Expect: Redirected away from login page to dashboard
    await expect(page).toHaveURL(/dashboard/);

    // Expect: Dashboard page title is shown
    await expect(page).toHaveTitle('AutoInspekt (Ver 2.0) - Dashboard');

    // Expect: Welcome heading is visible (confirms successful login)
    await expect(page.getByRole('heading', { name: 'Welcome to Autoinspekt' })).toBeVisible();
  });
});
