import { test, expect } from '@playwright/test';

test('Handle dropdowns', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Select multiple options from multi-select dropdown
    await page.selectOption('#colors', ['Red', 'Blue', 'Green', 'white']); // Select multiple options by visible text


    // Assertions
    // (1). check number of options in multi-select dropdown - approach1
    // const options = await page.locator('#colors option');
    // const optionCount = await options.count();
    // console.log('Number of options in multi-select dropdown:', optionCount);
    // await expect(options).toHaveCount(7);


    // (2). check number of options in multi-select dropdown using JS array - approach2
    const options = await page.$$('#colors option');
    console.log('Number of options in multi-select dropdown:', options.length);
    await expect(options).toHaveLength(7);


    // (3). check presence of specific option in multi-select dropdown
    const dropdownContent = await page.locator('#colors').textContent();
    console.log('Multi-select dropdown content:', dropdownContent);
    await expect(dropdownContent.includes('Yellow')).toBeTruthy();


    // (4). check presence of specific option in dropdown using loop - approach2
    const optionValues = await page.$$('#colors option');
    let optionFound = false;

    for (let option of optionValues) {
        const optionText = await option.textContent();

        if (optionText.includes('Red')) {
            optionFound = true;
            break;
        }
    }
    await expect(optionFound).toBeTruthy();

    await page.waitForTimeout(5000);

    await page.close();

});
