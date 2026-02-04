/* Truy cập trang https://material.playwrightvn.com/, click vào “Bài
học 1: Register Page (có đủ các element) */

import { test, expect } from '@playwright/test';

const link = 'https://material.playwrightvn.com/';

test('Excercise 2: Product Page', async ({ page }) => {

    await test.step('Navigate to Material Playwright Page', async () => {
        // navigate to the link
        await page.goto(link);
    });

    await test.step('Click on Bài học 2: Product page', async () => {
        // click to the link
        await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();

        // Expects page to have a heading with the name of Simple E-commerce
        await expect(page.getByRole('heading', { name: 'Simple E-commerce' })).toBeVisible(); // heading = find any tag <h1>, <h2>, ...
    });

    //Handle add products to cart
    await test.step('Add product to cart', async () => {
        // add product 1: 2 
        await page.locator("//button[text()='Add to Cart' and @data-product-id = '1']").click({
            clickCount: 2
        });

        // add product 2: 3
        await page.locator("//button[@data-product-id = '2']").click({
            clickCount: 3
        });

        // add product 3: 1
        await page.locator("(//button)[3]").click({
            clickCount: 1
        });
    })
});