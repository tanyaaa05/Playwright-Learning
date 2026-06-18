const { test, expect } = require('@playwright/test');

test('User Profile Update Test', async ({ page }) => {

  // Marking this test as fixme because the feature is currently broken
  test.fixme('Profile update functionality is under development');

  await page.goto('https://example.com');

  // Test steps (will not execute)
  await page.fill('#name', 'Tanya');
  await page.click('#update-btn');

  await expect(page.locator('.success-message')).toBeVisible();
});
