const { test, expect } = require('@playwright/test');

test('AutoSuggest Dropdown', async ({ page }) => {

    await page.goto('https://www.google.com/');

    // Type text
    await page.locator("textarea[name='q']").fill('India');

    // Wait and click matching suggestion
    await page.locator("//li//span[contains(text(),'india')]").first().click();

    await page.waitForTimeout(5000);
});















// const { test, expect } = require('@playwright/test');

// test('Auto Suggest Dropdown', async ({ page }) => {
//     await page.goto('https://www.redbus.in/');

//     await page.locator('input[id="srcinput"]').fill('Delhi');

//     await page.waitForTimeout(5000);
// })



