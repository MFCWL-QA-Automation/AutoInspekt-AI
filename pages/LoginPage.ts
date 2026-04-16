import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
    await this.page.waitForURL('**/login');
    await expect(this.page).toHaveURL(/login/);
    await expect(this.page).toHaveTitle('AutoInspekt (Ver 2.0) - Login');
  }

  async login(username: string, password: string) {
    await this.page.getByRole('textbox', { name: 'Username / Email Address /' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Log In' }).click();
    await expect(this.page).toHaveURL(/dashboard/);
  }
}
