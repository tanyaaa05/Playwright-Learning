import { test, expect } from '@playwright/test';

test('Handle dropdowns', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Multiple ways to select dropdown options - approach1
    await page.locator('#country').selectOption('India'); // Select by visible text
    await page.locator('#country').selectOption({ label: 'Canada' }); // Select by label
    await page.locator('#country').selectOption({ value: 'usa' }); // Select by value
    await page.locator('#country').selectOption({ index: 3 }); // Select by index
    await page.selectOption('#country', 'Japan'); // Select by visible text using selectOption method


    // Assertions
    // (1). check number of options in dropdown - approach1
    // const options = await page.locator('#country option');
    // const optionCount = await options.count();
    // console.log('Number of options in dropdown:', optionCount);
    // await expect(options).toHaveCount(10);


    // (2). check number of options in dropdown using JS array - approach2
    const options = await page.$$('#country option');
    console.log('Number of options in dropdown:', options.length);
    await expect(options).toHaveLength(10);


    // (3). check presence of specific option in dropdown - approach1
    // const content = await page.locator('#country').textContent();
    // console.log('Dropdown content:', content);
    // await expect(content.includes('India')).toBeTruthy();


    // (4). check presence of specific option in dropdown using loop - approach2
    const optionValues = await page.$$('#country option');
    let optionFound = false;

    for (const option of optionValues) {
        const optionText = await option.textContent(); // Get the visible text of the option

        if (optionText.includes('France')) {
            optionFound = true;
            break;
        }
    }
    await expect(optionFound).toBeTruthy();

    
    // (5). select option from dropdown using loop - approach2
    const optionList = await page.$$('#country option');
    for (const option of optionList) {
        let value = await option.textContent();

        if (value.includes('India')) {
            await page.selectOption('#country', 'India'); // select option from dropdown
            break;
        }

    }

    await page.waitForTimeout(5000);

    awaitpage.close();

});
