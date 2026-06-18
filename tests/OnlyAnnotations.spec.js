const { test, expect } = require('@playwright/test');

test('Regular Test 1', async ({ page }) => {
  console.log('This is a regular test and will be skipped when test.only is used.');
});

test.only('Focused Test Using test.only', async ({ page }) => {
  console.log('This is the only test that will execute because of the test.only annotation.');
});

test('Regular Test 2', async ({ page }) => {
  console.log('This is another regular test that will be skipped when test.only is present.');
});
