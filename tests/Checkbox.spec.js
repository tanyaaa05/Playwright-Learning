const { test, expect } = require('@playwright/test');

test('Handle Checkbox', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Single Checkbox handling
    await page.locator('//input[@id="sunday" and @type="checkbox"]').check();
    await expect(page.locator('//input[@id="sunday" and @type="checkbox"]')).toBeChecked();
    await expect(page.locator('//input[@id="sunday" and @type="checkbox"]').isChecked()).toBeTruthy();

    const mondayChecked = await page.locator('//input[@id="monday" and @type="checkbox"]').isChecked();
    await expect(mondayChecked).toBeFalsy();

    // Multiple Checkbox handling
    const checkboxLocators = [
        '//input[@id="sunday" and @type="checkbox"]',
        '//input[@id="monday" and @type="checkbox"]',
        '//input[@id="tuesday" and @type="checkbox"]'
    ];

    // Select multiple checkboxes and verifying their state
    for(let i=0; i<checkboxLocators.length; i++) {
        await page.locator(checkboxLocators[i]).check();
        await expect(page.locator(checkboxLocators[i])).toBeChecked();
    }
    await page.waitForTimeout(5000);

    // Deselecting the checkboxes and verifying their state
    for(let i=0; i<checkboxLocators.length; i++) {
        await page.locator(checkboxLocators[i]).uncheck();
        await expect(page.locator(checkboxLocators[i])).not.toBeChecked();
    }

    await page.waitForTimeout(5000); // pausing the test for 5 seconds to see the checked and unchecked state of the checkboxes

});
