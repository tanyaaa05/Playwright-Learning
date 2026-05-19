const { test, expect } = require('@playwright/test');

test('Home Page', async ({ page }) => {

    // Open the Demoblaze website
    await page.goto('https://www.demoblaze.com/index.html');

    const pageTitle = await page.title();
    console.log("Page Title is: ", pageTitle);

    // Verify page title is STORE
    await expect(page).toHaveTitle('STORE');

    // Get current webpage URL
    const pageURL = await page.url();
    console.log("Page URL is:", pageURL);

    // Verify current URL matches expected URL
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

    await page.close();

});
