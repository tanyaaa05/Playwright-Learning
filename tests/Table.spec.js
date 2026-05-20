const { test, expect } = require('@playwright/test');

test('Handle Web Tables', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');

    // (1). Total number of rows and columns
    const columns = await table.locator('thead tr th');
    console.log("Total number of columns:", await columns.count());
    await expect(await columns.count()).toBe(4);

    const rows = await table.locator('tbody tr');
    console.log("Total number of rows:", await rows.count());
    await expect(await rows.count()).toBe(5);


    // (2). Selecting the table row containing 'Laptop' using filter() and checking its checkbox
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Smartphone'
    })
    await matchedRow.locator('[type="checkbox"]').check();


    // (3). Selecting multiple products from the table using a reusable function
    await selectProducts(page, rows, 'Tablet');
    await selectProducts(page, rows, 'Wireless Earbuds');


    // (4). Printing all product details from the table using nested loops
    // for (let i = 0; i < await rows.count(); i++) {

    //     // Get current row using index
    //     const row = rows.nth(i);

    //     // Locate all table columns (td) inside the current row
    //     const tds = row.locator('td');

    //     // Loop through all columns except the last one (checkbox column)
    //     for (let j = 0; j < await tds.count() - 1; j++) {

    //         // Print text content of each table cell
    //         console.log(await tds.nth(j).textContent());
    //     }
    // }


    // (5). Read all the data from all the pages in the table
    const pages = page.locator('#pagination li a');
    console.log("Total number of pages in the table: ", await pages.count());

    for (let p = 0; p < await pages.count(); p++) {
        // Skip clicking for the first page since page 1 is already open by default.
        // Click remaining pagination links starting from page 2.
        if (p > 0) {
            await pages.nth(p).click();
        }

        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
            const tds = row.locator('td');

            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(await tds.nth(j).textContent());
            }
        }
        await page.waitForTimeout(3000);
    }

    await page.waitForTimeout(5000);
})


// Reusable function to find a product row by product name and select its checkbox
async function selectProducts(page, rows, name) {
    const matchedMultipleRows = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedMultipleRows.locator('[type="checkbox"]').check();
}
