const { test, expect } = require('@playwright/test');

test('Soft Assertions', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');

    /*
        // Hard Assertions: If any of the assertion fails, the test will stop executing further steps.
        await expect(page).toHaveTitle('nopCommerce demo store. Regist');
        await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
        await expect(page.getByAltText('nopCommerce demo store')).toBeVisible();
    */

    // Soft Assertions: If any of the assertion fails, the test will continue executing further steps and report all assertion failures at the end of the test.
    await expect.soft(page).toHaveTitle('nopCommerce demo store. Regist');
    await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/register');
    await expect.soft(page.getByAltText('nopCommerce demo store')).toBeVisible();

    await page.close();
});
