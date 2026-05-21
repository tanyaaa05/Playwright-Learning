const { test, expect } = require('@playwright/test');

test('Date Picker Next', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.fill('[id="datepicker"]', '03/13/2026');

    let year = "2027";
    let month = "March";
    let date = "13";

    await page.locator('[id="datepicker"]').click(); // opens calender

    while (true) {
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();

        // Check whether displayed month and year match the expected values
        if (currentYear == year && currentMonth == month) {
            break;
        }

        // Click Next button to move to next month in calendar
        await page.locator('[title="Next"]').click();
    }

    // Locate all matching dates based on provided date value
    const dates = await page.$$(`//a[@data-date='${date}']`);

    // Loop through available dates and select the matching date
    for (const dt of dates) {

        // Compare text of each date with expected date
        if (await dt.textContent() == date) {
            await dt.click(); // Click matching date
            break;
        }
    }


    // Date selection without loop
    // await page.click(`//a[@data-date='${date}']`);

    await page.waitForTimeout(5000);

});












// test('Date Picker Prev', async ({ page }) => {

//     await page.goto('https://testautomationpractice.blogspot.com/');

//     // await page.fill('[id="datepicker"]', '03/13/2019');

//     let year = "2019";
//     let month = "March";
//     let date = "13";

//     await page.locator('[id="datepicker"]').click();

//     while (true) {
//         const currentYear = await page.locator('.ui-datepicker-year').textContent();
//         const currentMonth = await page.locator('.ui-datepicker-month').textContent();

//         if (currentYear == year && currentMonth == month) {
//             break;
//         }

//         await page.locator('[title="Prev"]').click();

//     }

//     const dates = await page.$$(`//a[@data-date='${date}']`);

//     for (const dt of dates) {
//         if (await dt.textContent() == date) {
//             await dt.click();
//             break;
//         }
//     }

//         // Date selection without loop
//         await page.click(`//a[@data-date='${date}']`);

//     await page.waitForTimeout(5000);

// });

