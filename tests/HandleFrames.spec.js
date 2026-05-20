const {test, expect} = require('@playwright/test');

test('frames', async ({page}) => {
    await page.goto('https://www.redbus.in/');

    await page.click('[type="button"]');
    await page.click("//button[text()='Log in']");

    // Total frames
    const allFrames = await page.frames();
    console.log("Number of frames: ", allFrames.length);

    // approach1: using name or URL(Frame object method)
    await page.locator(".inputFieldMobile___4b195d").fill("9149090169");
    const frame1 = page.frameLocator("iframe[title='reCAPTCHA']");
    await frame1.locator("#recaptcha-anchor").click();

    await page.waitForTimeout(5000);
});
