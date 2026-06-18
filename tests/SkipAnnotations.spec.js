const { test, expect } = require('@playwright/test');

test('Login Test', async ({ page }) => {
  console.log('This test will execute.');
});


// Skip Annotation Using test.skip()
test.skip('Payment Test', async ({ page }) => {
  console.log('This test will be skipped.');
});

test('Logout Test', async ({ page }) => {
  console.log('This test will execute.');
});













// Conditional skip: This test will run on Firefox and WebKit,
// but will be skipped when the browser is Chromium.
// test('Search Functionality Test', async ({ page, browserName }) => {

//   if (browserName === 'chromium') {
//     test.skip('Skipping this test on Chromium browser.');
//     }

//   console.log(`Executing test on ${browserName}`);
// });

