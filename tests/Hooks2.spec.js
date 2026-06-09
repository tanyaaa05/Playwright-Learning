import { test, expect } from '@playwright/test';

let page; // Declare the page variable at the top level

test.beforeEach(async ({ browser }) => {
    
    page = await browser.newPage(); // browser.newPage() is used to open a new browser tab or page instance in Playwright for test execution.

    await page.goto('https://www.demoblaze.com/index.html');

    // Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('tanya639');
    await page.locator('#loginpassword').fill('Tanya@639');
    await page.locator('//button[@onclick="logIn()"]').click();
});

test.afterEach(async () => {

    // Logout
    await page.locator('#logout2').click();

});



test('Home Page Test', async () => {

    // Navigate to Home Page
    const products = await page.locator('.hrefch').allTextContents();
    console.log(products);

    expect(products).toHaveLength(9);
    expect(products).toContain('Samsung galaxy s6');
})





test('Add Product to Cart Test', async () => {

    // Add Product to Cart
    await page.locator("//a[normalize-space()='Iphone 6 32gb']").click();
    await page.locator("//a[@onclick='addToCart(5)']").click();

    page.on('dialog', async (dialog) => {
        await expect(dialog.message()).toContain('Product added');
        await dialog.accept();
    });

});





