import { test, expect } from '@playwright/test';

test('Prompt Dialog', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {
        await expect(dialog.type()).toContain('prompt');
        await expect(dialog.message()).toContain('Please enter your name:');
        await expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('John'); // close dialog by using OK Button
        // await dialog.dismiss(''); // close dialog by using Cancel Button
    })

    await page.locator('[id="promptBtn"]').click();

    const successMsg = await page.locator('[id="demo"]');
    await expect(successMsg).toHaveText('Hello John! How are you today?');

    // const cancelMsg = await page.locator('[id="demo"]');
    // await expect(cancelMsg).toHaveText('User cancelled the prompt.');


    await page.waitForTimeout(5000);
})
