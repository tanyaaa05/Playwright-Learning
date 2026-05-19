import { test, expect } from '@playwright/test';

test('Hidden dropdown', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');

    await page.locator('[type="submit"]').click();

    await page.locator("//span[text()='PIM']").click();

    await page.locator("//label[text()='Employment Status']/ancestor::div[contains(@class,'oxd-input-group')]//i[contains(@class,'oxd-select-text--arrow')]").click();

    await page.waitForTimeout(3000);

    const options = await page.$$("//div[@role='listbox']//span");

    for (let option of options) {
        const content = await option.textContent();
        console.log(content);

        if (content.includes('Full-Time Permanent')) {
            await option.click();
            break;
        }
    }

    await page.waitForTimeout(5000);
})

