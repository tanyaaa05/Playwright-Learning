import { test, expect } from '@playwright/test';

test.only('Single File', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Upload the file using setInputFiles
    await page.locator('[id="singleFileInput"]').setInputFiles('tests\\uploadFiles\\Tanya_Resume.pdf');

    await expect(page.locator('[id="singleFileInput"]')).toHaveValue(/Tanya_Resume\.pdf/);

    await page.waitForTimeout(3000);


    // Clear the file input
    await page.locator('[id="singleFileInput"]').setInputFiles([]);
    await expect(page.locator('[id="singleFileInput"]')).toHaveValue('');

    await page.waitForTimeout(5000);
});













test('Multiple Files', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    // Upload multiple files using setInputFiles
    await page.locator('[id="filesToUpload"]').setInputFiles([
        'tests\\uploadFiles\\Tanya_Resume.pdf',
        'tests\\uploadFiles\\Tanya_Resume(SDE).pdf'
    ]);

    await page.waitForTimeout(5000);

    await expect(page.locator(`//li[text()='Tanya_Resume.pdf']`)).toBeVisible();
    await expect(page.locator(`//li[text()='Tanya_Resume(SDE).pdf']`)).toBeVisible();


    // Clear the file input
    await page.locator('[id="filesToUpload"]').setInputFiles([]);
    await expect(page.locator('[id="fileList"]')).toHaveText('No Files Selected');

    await page.waitForTimeout(5000);
});


