const { test, expect } = require('@playwright/test');

test('Trace test', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');

    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('tanya639');
    await page.locator('#loginpassword').fill('Tanya@639');
    await page.locator('//button[@onclick="logIn()"]').click();

    await page.waitForTimeout(3000);

    await expect(page.locator('[id="nameofuser"]')).toHaveText('Welcome tanya639');

    await page.waitForTimeout(2000);

});


