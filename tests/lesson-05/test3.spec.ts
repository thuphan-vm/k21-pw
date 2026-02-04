/* Truy cập trang https://material.playwrightvn.com/, click vào “Bài
học 1: Register Page (có đủ các element) */

import { test, expect } from '@playwright/test';

const link = 'https://material.playwrightvn.com/';

test('Excercise 3: Todo Page', async ({ page }) => {

    await test.step('Navigate to Material Playwright Page', async () => {
        // navigate to the link
        await page.goto(link);
    });

    await test.step('Click on Bài học 3: Todo page', async () => {
        // click to the link
        await page.getByRole('link', { name: 'Bài học 3: Todo page' }).click();

        // Expects page to have a heading with the name of To-Do List
        await expect(page.getByRole('heading', { name: 'To-Do List' })).toBeVisible(); // heading = find any tag <h1>, <h2>, ...
    });

    // Handle Add 100 todo items with format "Todo <i>"
    await test.step('Add 100 items', async () => {
        // get input new-task XPath
        const inputNewTask = await page.locator("//input[@id='new-task']");
        // get button add XPath
        const btnAdd = await page.locator("//button[@id='add-task']");

        // add 100 items
        for (let i = 1; i <= 100; i++) {
            await inputNewTask.fill(`Todo <${i}>`);
            await btnAdd.click();
        }
        await page.waitForTimeout(3000); // pause within 3 seconds
    });

    // Delete odd items
    await test.step('Delete odd items', async () => {
        // only handle confirmation dialog onace time before loop
        
        // 1st way
        // page.on('dialog', dialog => dialog.accept());

        // 2nd way: check dialog message
        page.on('dialog', async dialog => {
            console.log('Dialog shown:', dialog.message());
            await dialog.accept();
        });

        // delete odd items
        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                console.log('i =', i); // check i
                await page.locator(`//button[@id = 'todo-${i}--delete']`).click({});
            }
        }
    })
});