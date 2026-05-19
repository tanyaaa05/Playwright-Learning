const {test, expect} = require('@playwright/test');

test('Handle Inputbox', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Input box handling
    await expect(page.locator('input[id="name"]')).toBeVisible();
    await expect(page.locator('input[id="name"]')).toBeEmpty();
    await expect(page.locator('input[id="name"]')).toBeEditable();
    await expect(page.locator('input[id="name"]')).toBeEnabled();


    // await page.locator('input[id="name"]').fill('John Doe');
    await page.fill('input[id="name"]', 'John Doe');

    
    await page.waitForTimeout(5000); // pausing the test for 5 seconds to see the filled value in the input box

})
