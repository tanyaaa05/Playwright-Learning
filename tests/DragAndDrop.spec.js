const { test, expect } = require('@playwright/test');

test('Drag and Drop Action', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const sourceEle = await page.locator('#draggable');      // Source element
    const targetEle = await page.locator('#droppable');  // Target element

    // Drag & Drop - Approach1
    await sourceEle.hover();
    await page.mouse.down(); // Click and hold the source element

    await targetEle.hover();
    await page.mouse.up(); // Release the mouse button on the target element


    // Drag & Drop - Approach2
    // await sourceEle.dragTo(targetEle);

    await page.waitForTimeout(5000);

})
