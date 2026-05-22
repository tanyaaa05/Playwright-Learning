const { test, expect } = require('@playwright/test');

test('Mouse Double Click Action', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const btnCopy = await page.locator("//button[text()='Copy Text']");

    // Performing double click action
    await btnCopy.dblclick();

    const field2 = await page.locator('[id="field2"]');

    await expect(field2).toHaveValue('Hello World!');

    await page.waitForTimeout(5000);

})
