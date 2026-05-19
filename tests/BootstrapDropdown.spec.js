const { test, expect } = require('@playwright/test');

test('Bootstrap dropdown', async ({ page }) => {

    await page.goto('https://getbootstrap.com/docs/5.3/components/dropdowns/');

    // Open dropdown
    await page.locator('.dropdown-toggle').first().click();

    // Click dropdown item
    await page.locator('.dropdown-menu .dropdown-item').first().click();
    // await page.locator('.dropdown-item', { hasText: 'v5.2.3' }).click();

});

