const {test, expect} = require('@playwright/test');

test('Home Page Test', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    // Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('tanya639');
    await page.locator('#loginpassword').fill('Tanya@639');
    await page.locator('//button[@onclick="logIn()"]').click();

    // Navigate to Home Page
    const products = await page.locator('.hrefch').allTextContents();
    console.log(products);

    expect(products).toHaveLength(9);
    expect(products).toContain('Samsung galaxy s6');


    // Logout
    await page.locator('#logout2').click();
})





test('Add Product to Cart Test', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    // Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('tanya639');
    await page.locator('#loginpassword').fill('Tanya@639');
    await page.locator('//button[@onclick="logIn()"]').click();

    // Add Product to Cart
    await page.locator("//a[normalize-space()='Iphone 6 32gb']").click();
    await page.locator("//a[@onclick='addToCart(5)']").click();

    page.on('dialog', async (dialog) => {
        await expect(dialog.message()).toContain('Product added');
        await dialog.accept();
    });

    // Logout
    await page.locator('#logout2').click();

});




