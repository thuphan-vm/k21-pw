import { test, expect } from '@playwright/test';

test.describe('Material page tests', async () => {
    test.beforeAll(async () => {
        console.log('Before All hook is running');

    })

    test.beforeEach(async ({ page }) => {
        await test.step("Step 1: Open material page", async () => {
            // await page.goto("https://material.playwrightvn.com/");
            console.log('Before test run');
        });
    });

    test.afterEach(async ({ }) => {
        await test.step("Clean up: after test run", async () => {
            // await page.goto("https://material.playwrightvn.com/");
            console.log('After test run');
        });
    })

    test.afterAll(async () => {
        console.log('After All hook is running');

    })

    test('Test 1: user registration page', async ({ page }) => {
        await test.step("Step 2: Click user registration", async () => {
            console.log("Running test 1");
            expect(1).toEqual(1);
        });
    })

    test('Test 2: product page', async ({ page }) => {
        await test.step("Step 2: Click product page", async () => {
            console.log("Running test 2");

        });
    })

});