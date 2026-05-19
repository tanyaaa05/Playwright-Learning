import { test, expect } from '@playwright/test';

test('Handle Radio Button', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Radio button handling
    await page.locator('input[id="female"]').check();

    
    // Verifying the state of the radio buttons
    await expect(page.locator('input[id="female"]')).toBeChecked();
    await expect(page.locator('input[id="female"]').isChecked()).toBeTruthy();

    await expect(page.locator('input[id="male"]').isChecked()).toBeFalsy();

    await page.waitForTimeout(5000); // pausing the test for 5 seconds to see the checked radio button

});
