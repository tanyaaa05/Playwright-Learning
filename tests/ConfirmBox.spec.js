const { test, expect } = require('@playwright/test');

test('Confirmation Dialog-Alert with OK and Cancel', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling Dialog Handler
    page.on('dialog', async dialog => {
        await expect(dialog.type()).toContain('confirm');
        await expect(dialog.message()).toContain('Press a button!');
        await dialog.accept(); // close dialog by using OK Button
        // await dialog.dismiss(); // close dialog by using Cancel Button
    })

    // Trigger Confirmation dialog
    await page.click('[id="confirmBtn"]');

    await page.waitForTimeout(3000);

    const successMsg = await page.locator('[id="demo"]');
    await expect(successMsg).toHaveText('You pressed OK!');

    // const cancelMsg = await page.locator('[id="demo"]');
    // await expect(cancelMsg).toHaveText('You pressed Cancel!');

    await page.waitForTimeout(5000);
});
