const { test, expect } = require('@playwright/test');

test('Drag and Drop Action', async ({ page }) => {
    await page.goto('https://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag');

    const rome = await page.locator('#box6');      // Source element
    const italy = await page.locator('#box106');  // Target element

    // Drag & Drop - Approach1
    await rome.hover();
    await page.mouse.down();

    await italy.hover();
    await page.mouse.up();


    // Drag & Drop - Approach2
    await rome.dragTo(italy);

    await page.waitForTimeout(5000);

})
