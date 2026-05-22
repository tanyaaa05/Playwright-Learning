const { test, expect } = require('@playwright/test');

test('Keyboard Actions', async ({ page }) => {
    await page.goto('https://gotranscript.com/text-compare');

    await page.locator('[name="text1"]').fill('Welcome to Automation!');

    // Ctrl + A -> Select the text
    await page.keyboard.press('Control+A')

    // Ctrl + C -> Copy the text
    await page.keyboard.press('Control+C')

    // Tab
    await page.keyboard.press('Tab');
    
    // Ctrl + V -> Paste the text
    await page.keyboard.press('Control+V')


    await page.waitForTimeout(5000);

})
