const { test, expect } = require('@playwright/test');

test('Mouse Hover', async ({ page }) => {
    await page.goto('https://demo.opencart.com/');

    await page.waitForTimeout(20000);

    const desktops = await page.locator(`//*[@id="narbar-menu"]/ul/li[1]/a`);
    const macbook = await page.locator('.nav-link');

    // Mouse Hover
    await desktops.hover();
    await macbook.hover();

    await page.waitForTimeout(5000);

});
