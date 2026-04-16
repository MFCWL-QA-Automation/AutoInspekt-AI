import { Page, expect } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  async verifyLoaded() {
    await expect(this.page).toHaveTitle('AutoInspekt (Ver 2.0) - Dashboard');
  }

  async closeAlertIfPresent() {
    const closeBtn = this.page.getByRole('button', { name: 'Close' });
    if (await closeBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
      await closeBtn.click();
    }
  }
}
