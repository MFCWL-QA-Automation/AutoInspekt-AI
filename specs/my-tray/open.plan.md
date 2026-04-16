# AutoInspekt AI Portal - My Tray Open Navigation Test Plan

## Application Overview

AutoInspekt AI Portal (Ver 2.0) at https://aiv3portal.ibbtrade.com/. After successful login, an OTP notification alert appears which must be dismissed. The user then navigates to My Tray via the left sidebar and clicks Open to reach the My Tray - Open Leads page.

## Test Scenarios

### 1. My Tray Navigation

**Seed:** `tests/auth/seed.spec.ts`

#### 1.1. Close alert and navigate to My Tray Open

**File:** `tests/my-tray/open.spec.ts`

**Steps:**
  1. Verify the dashboard page is loaded after login
    - expect: The page URL should contain 'dashboard'
    - expect: The page title should be 'AutoInspekt (Ver 2.0) - Dashboard'
  2. Close the OTP notification alert by clicking the 'Close' button
    - expect: The alert dialog should be dismissed and no longer visible
  3. Click on 'My Tray' in the left navigation menu
    - expect: The My Tray submenu should expand showing items like SC Leads, Open, RO Leads, etc.
  4. Click on 'Open' under the My Tray submenu
    - expect: The page URL should be https://aiv3portal.ibbtrade.com/my-tray/open
    - expect: The page title should be 'AutoInspekt (Ver 2.0) - My Tray - Open Leads'
    - expect: The Open Leads list/table should be visible on the page
