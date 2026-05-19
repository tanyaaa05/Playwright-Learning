// CommonJS module syntax
// const {test, expect} = require('@playwright/test');

import {test, expect} from '@playwright/test'; // ES6 module syntax

test('Locators', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    // Locate element using ID 'login2' and click on it
    // await page.locator('id=login2').click();
    await page.click('id=login2');


    // Locate element using CSS selector and fill the username field
    // await page.locator('#loginusername').fill('tanya639');
    await page.fill('#loginusername', 'tanya639');
    // await page.type('#loginusername', 'tanya639');


    // Locate element using CSS selector and fill the password field
    await page.fill('input[id="loginpassword"]', 'Tanya@639');


    // click on Login Button using XPath locator
    // await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]'); // Using absolute XPath locator
    await page.click("//button[text()='Log in']"); // Using text-based XPath locator


    // verify that the user is logged in by checking the presence of the logout button
    const logOutButton = await page.locator('#logout2');
    await expect(logOutButton).toBeVisible();


    await page.close();


});




