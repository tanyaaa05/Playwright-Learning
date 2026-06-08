import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    console.log('This is before all hook....');
})

test.afterAll(async () => {
    console.log('This is after all hook....');
});

test.beforeEach(async () => {
    console.log('This is before each hook....');
});

test.afterEach(async () => {
    console.log('This is after each hook....');
});

test.describe('Group 1', () => {

    test('Test 1', async ({ page }) => {
        console.log('This is Test 1....');
    });

    test('Test 2', async ({ page }) => {
        console.log('This is Test 2....');
    });

});


test.describe('Group 2', () => {
    test('Test 3', async ({ page }) => {
        console.log('This is Test 3....');
    });

    test('Test 4', async ({ page }) => {
        console.log('This is Test 4....');
    });
});


test.describe.only('Group 3', () => {
    test('Test 5', async ({ page }) => {
        console.log('This is Test 5....');
    });

    test('Test 6', async ({ page }) => {
        console.log('This is Test 6....');
    });
});



