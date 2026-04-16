import { test, expect } from '../../fixtures/auth.fixture';
import { DashboardPage } from '../../pages/DashboardPage';
import { MyTrayPage } from '../../pages/MyTrayPage';

test.describe('My Tray Navigation', () => {
  test('Close alert and navigate to My Tray Open', async ({ loggedInPage }) => {
    const dashboardPage = new DashboardPage(loggedInPage);
    await dashboardPage.closeAlertIfPresent();

    const myTrayPage = new MyTrayPage(loggedInPage);
    await myTrayPage.navigateToOpen();
    await myTrayPage.takeScreenshot('my-tray-open');
  });
});
