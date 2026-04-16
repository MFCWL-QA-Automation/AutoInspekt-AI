# AutoInspekt AI Portal - Valid Login Test Plan

## Application Overview

AutoInspekt AI Portal (Ver 2.0) at https://aiv3portal.ibbtrade.com/. The portal presents a login page with Username/Email/Mobile radio-based login options, a username field, a password field, and a Log In button. This plan covers valid login using the Username option.

## Test Scenarios

### 1. Authentication

**Seed:** `tests/auth/seed.spec.ts`

#### 1.1. Valid login with username and password

**File:** `tests/auth/valid-login.spec.ts`

**Steps:**
  1. Navigate to https://aiv3portal.ibbtrade.com/
    - expect: The page URL should be https://aiv3portal.ibbtrade.com/login
    - expect: The page title should be 'AutoInspekt (Ver 2.0) - Login'
    - expect: The 'Portal Log In' heading should be visible
  2. Verify the 'Username' radio button is selected by default
    - expect: The 'Username' radio button should be checked
  3. Fill the 'Username / Email Address / Mobile' textbox with '23294629'
    - expect: The username field should contain '23294629'
  4. Fill the 'Password' textbox with 'Test@123'
    - expect: The password field should contain the entered password (masked)
  5. Click the 'Log In' button
    - expect: The user should be redirected away from the login page
    - expect: The dashboard or home page should be displayed
    - expect: No error message should appear
