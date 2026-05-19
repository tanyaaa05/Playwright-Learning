import {test, expect} from '@playwright/test';
import e from 'cors';

test('Assertions', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');

    // 1. Assertion to check if the page URL is correct
    const pageURL = await page.url();
    console.log("Page URL is:", pageURL);
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');


    // 2. Assertion to check if the page title is correct
    const pageTitle = await page.title();
    console.log("page title is:", pageTitle);
    await expect(page).toHaveTitle('nopCommerce demo store. Register');


    // 3. Assertion to check if the logo is visible on the page
    const logo = await page.getByAltText('nopCommerce demo store');
    await expect(logo).toBeVisible();


    // 4. Assertion to check if the "Search" input field is enabled
    const searchInput = await page.locator('#small-searchterms');
    await expect(searchInput).toBeEnabled();


    // 5. Assertion to check radio button is selected or not
    const radioButton = await page.locator('#gender-female');
    await radioButton.click();
    await expect(radioButton).toBeChecked();


    // checking the checkbox
    const newsletterCheckbox = await page.locator('input[class="form-check-input"]');
    await expect(newsletterCheckbox).toBeChecked();


    // 6. Assertion to check attribute value of the "Register" button
    const registerButton = await page.locator('#register-button');
    await expect(registerButton).toHaveAttribute('type', 'submit');


    // 7. Assertion to check complete exact text
    const completeText = await page.locator('.page-title h1');
    await expect(completeText).toHaveText('Register');


    // 8. Assertion to check partial text
    const partialText = await page.locator('.page-title h1');
    await expect(partialText).toContainText('Reg');


    // 9. Assertion to check input field value
    const emailInput = await page.locator('input[id="Email"]');
    await emailInput.fill('test@123.com');
    await expect(emailInput).toHaveValue('test@123.com');


    // 10. Assertion to check number of footer menu items
    const countFooterItems = page.locator('.footer-menu__item');
    console.log("Footer menu items count is:", await countFooterItems.count());
    await expect(countFooterItems).toHaveCount(18);

});
