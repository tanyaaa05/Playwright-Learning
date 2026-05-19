const { test, expect } = require('@playwright/test');

test('Auto Suggest Dropdown', async ({ page }) => {
    await page.goto('https://www.redbus.in/');

    await page.locator('input[id="srcinput"]').fill('Delhi');

    await page.waitForTimeout(5000);
})



