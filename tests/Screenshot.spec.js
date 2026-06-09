import { test, expect } from '@playwright/test';

test('Page screenshot', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');

    await page.screenshot(({ path: 'tests\\screenshots\\' + Date.now() + 'Homepage.png' }));
});


test('Full page screenshot', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    await page.screenshot(({ path: 'tests\\screenshots\\' + Date.now() + 'Fullpage.png', fullPage: true }));

});


test('Element screenshot', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    await page.locator("//img[@alt='First slide']").screenshot(({ path: 'tests\\screenshots\\' + Date.now() + 'Element.png' }));
});



