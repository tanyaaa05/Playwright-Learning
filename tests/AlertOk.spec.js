import { test, expect } from '@playwright/test';

test('Alert with OK', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling Dialog Handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept(); // close dialog by using OK Button
    });

    // Trigger alert dialog
    await page.click('[id="alertBtn"]');

    await page.waitForTimeout(5000);
})

