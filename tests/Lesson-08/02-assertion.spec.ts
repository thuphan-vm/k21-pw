import { test, expect } from '@playwright/test';

test.describe('Material page tests', async () => {
    test.beforeEach(async ({ page }) => {
        await test.step("Step 1: Open material page", async () => {
            await page.goto("https://material.playwrightvn.com")
        });
    });

    test('Test 1: user registration page', async ({ page }) => {
        await test.step("Step 2: Click user registration", async () => {
            await page.locator("//a[@href='01-xpath-register-page.html']").click();
            const headingLoc = page.locator("//h1[@id='self']");
            
            await expect(headingLoc).toContainText("User Registration");
        });
    })

    test('Test 2: product page', async ({ }) => {
        await test.step("Step 2: Click product page", async () => {
            console.log("Running test 2");

        });
    })

});