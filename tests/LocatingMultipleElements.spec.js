const {test, expect} = require('@playwright/test');

test('Locating Multiple Elements', async ({ page }) => {

    await page.goto('https://demoblaze.com/index.html');

    // OLD METHOD: Using $$ to locate all <a> link elements
    // Stores all matching elements in an array
    // const links = await page.$$('a');

    // Loop through each link and print its text content
    // for(const link of links) {
    //     const linkText = await link.textContent();
    //     console.log(linkText);
    // }


    // Wait until all <a> link elements are visible on webpage
    await page.waitForSelector('a');

    // MODERN PLAYWRIGHT METHOD: Using locator() for multiple elements
    const categoryProducts = await page.locator('a');

    // Count total link elements found
    const countItems = await categoryProducts.count();

    // Loop through all links and print their text content,
    for (let i = 0; i < countItems; i++) {
        const categoryName = await categoryProducts.nth(i).textContent();
        console.log(categoryName);
    }
    console.log('\n');


    await page.waitForSelector('//*[@id="tbodyid"]/div/div/div/h4/a');
    const products = await page.locator('//*[@id="tbodyid"]/div/div/div/h4/a');

    const count = await products.count();

    for (let i = 0; i < count; i++) {
        const productName = await products.nth(i).textContent();
        console.log(productName);
    }

    await page.close();
})
