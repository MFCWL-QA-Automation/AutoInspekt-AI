import { Page, expect } from '@playwright/test';

export class MyTrayPage {
  constructor(private page: Page) {}

  async navigateToOpen() {
    await this.page.goto('/my-tray/open');
    await expect(this.page).toHaveURL(/my-tray\/open/);
    await expect(this.page).toHaveTitle('AutoInspekt (Ver 2.0) - My Tray - Open Leads');
  }

  async takeScreenshot(name: string) {
    await this.page.waitForLoadState('networkidle');
    await this.page.screenshot({ path: `${name}.png`, fullPage: true });
  }
}
