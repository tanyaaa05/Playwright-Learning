import {test, expect} from '@playwright/test';

test('Verify invalid tracking id shows error', async ({ page }) => {

    await page.goto('https://www.shipkia.com/');

    // click on Track order button
    await page.getByText('Track Order').click();


    // input invalid tracking id
    await page.locator('[id="awbInput"]').fill('123456789012345678');

    // click on Track button
    await page.locator('[id="trackBtn"]').click();

    const errorPopup = page.locator('[id="errorTitle"]');
    await expect(errorPopup).toBeVisible();


});
