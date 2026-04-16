import { test, expect } from '@playwright/test';

test.describe('My Tray Navigation', () => {
  test.beforeEach(async ({ page }) => {
    // Login before each test
    await page.goto('https://aiv3portal.ibbtrade.com/');
    await page.getByRole('textbox', { name: 'Username / Email Address /' }).fill('23294629');
    await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
    await page.getByRole('button', { name: 'Log In' }).click();
    await expect(page).toHaveURL(/dashboard/);
  });

  test('Close alert and navigate to My Tray Open', async ({ page }) => {
    // Step 1: Verify dashboard is loaded
    await expect(page).toHaveTitle('AutoInspekt (Ver 2.0) - Dashboard');

    // Step 2: Close OTP notification alert if it appears
    await page.getByRole('button', { name: 'Close' }).click();
   
    // Step 3 & 4: Navigate to My Tray > Open
    await page.goto('https://aiv3portal.ibbtrade.com/my-tray/open');

    // Expect: My Tray Open Leads page loaded
    await expect(page).toHaveURL('https://aiv3portal.ibbtrade.com/my-tray/open');
    await expect(page).toHaveTitle('AutoInspekt (Ver 2.0) - My Tray - Open Leads');
    await page.waitForTimeout(3000); // Wait for 2 seconds to ensure page is fully loaded
    await page.screenshot({ path: 'my-tray-open.png', fullPage: true });

  });
}); 
