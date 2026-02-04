/* Truy cập trang https://material.playwrightvn.com/, click vào “Bài
học 1: Register Page (có đủ các element) */

import { test, expect } from '@playwright/test';

const link = 'https://material.playwrightvn.com/';

test('Excercise 4: Personal notes', async ({ page }) => {

    await test.step('Navigate to Material Playwright Page', async () => {
        // navigate to the link
        await page.goto(link);
    });

    await test.step('Click on Bài học 4: Personal notes', async () => {
        // click to the link
        await page.getByRole('link', { name: 'Bài học 4: Personal notes' }).click();

        // Expects page to have a heading with the name of Personal Notes
        await expect(page.getByRole('heading', { name: 'Personal Notes' })).toBeVisible(); // heading = find any tag <h1>, <h2>, ...
    });

    // Add and serch notes
    await test.step('Add notes', async () => {
        // Create array notes
        const arrayNote = [
            {
                title: "click",
                content: "Hàm click dùng để thực hiện click vào các phần tử trên trang web"
            },
            {
                title: "fill",
                content: "Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web"
            },
            {
                title: "type",
                content: "Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng"
            },
            {
                title: "hover",
                content: "Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover"
            },
            {
                title: "check",
                content: "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked"
            },
            {
                title: "uncheck",
                content: "Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked"
            },
            {
                title: "selectOption",
                content: "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown"
            },
            {
                title: "press",
                content: "Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác"
            },
            {
                title: "dblclick",
                content: "Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web"
            },
            {
                title: "dragAndDrop",
                content: "Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web"
            }
        ];
        // add notes
        for (let i = 0; i < arrayNote.length; i++) {
            // add titles
            await page.locator("//input[@id='note-title']").fill(arrayNote[i].title);
            // add content
            await page.locator("//textarea[@id='note-content']").fill(arrayNote[i].content);
            await page.locator("//button[@id='add-note']").click();
        }
        await page.waitForTimeout(3000); // pause within 3 seconds

    });

    // search keyword
    await test.step('Search note', async () => {
        const keyword = "một hoặc nhiều"; // keyword
        await page.locator("//input[@id='search']").pressSequentially(keyword); // input keyword
        await page.waitForTimeout(500); // wait for search output
        await expect(page.locator("//ul[@id='notes-list']")).toContainText(keyword); // check result
    })
});