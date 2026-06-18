const { test, expect } = require('@playwright/test');

test('test1@sanity', async ({ page }) => {

    console.log('This is my Test1...');
});


test('test2@sanity', async ({ page }) => {

    console.log('This is my Test2...');
});


test('test3@regression', async ({ page }) => {

    console.log('This is my Test3...');
});


test('test4@regression', async ({ page }) => {

    console.log('This is my Test4...');
});


test('test5@sanity@regression', async ({ page }) => {

    console.log('This is my Test5...');
});


test('test6@sanity', async ({ page }) => {

    console.log('This is my Test6...');
});




