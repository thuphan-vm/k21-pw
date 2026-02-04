/* Truy cập trang https://material.playwrightvn.com/, click vào “Bài
học 1: Register Page (có đủ các element) */

import { test, expect } from '@playwright/test';

const link = 'https://material.playwrightvn.com/';

test('Excercise 1: Register Page', async ({ page }) => {

    await test.step('Navigate to Material Playwright Page', async () => {
        // navigate to the link
        await page.goto(link);
    });

    await test.step('Click on Bài học 1: Register Page (có đủ các element)', async () => {
        // click to the link
        await page.getByRole('link', { name: 'Bài học 1: Register Page (có đủ các element)' }).click();

        // Expects page to have a heading with the name of User Registration.
        await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible(); // heading = find any tag <h1>, <h2>, ...
    });

    await test.step('Fill all fields', async () => {
        // input: username
        await page.locator("//input[@id='username']").fill("Minh Thu");

        // input: email
        await page.locator("//input[@name='email']").pressSequentially("minhthu@gmail.com", {
            delay: 100,
        });

        // radio: Gender
        const isCheckedFemale = await page.locator("//input[@id='female']").isChecked(); // check if the radio Female is checked

        if (!isCheckedFemale) { // if isChecked = false
            await page.locator("//input[@id='female']").check(); // tick on radio female
        }
        console.log('isCheckedFemale: ', isCheckedFemale); //re-check value 

        // checkbox - multi options: Hobbies 
        await page.locator("//input[@id='reading']").check();
        await page.locator("//input[@id='traveling']").check();

        // select multi options: Interest
        await page.locator("//select[@id='interests']").selectOption(["Technology", "Science", "Music"]);
        // other way
        // await page.selectOption("//select[@id='interests']", [
        //     { label: "Technology" },
        //     { label: "Science" },
        //     { label: "Music" }
        // ]);

        // dropdown: Country
        await page.locator("//select[@id='country']").selectOption('United Kingdom');
        //other way:
        // await page.locator("//select[@id='country']").selectOption({value: "australia"});

        // date: Date of Birth
        await page.locator("//input[@id='dob']").fill('1996-07-16');

        // Upload file: Profile Picture
        await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-05/images/the_tieu_chuan.png");

        // TextArea: Biography
        await page.locator("//textarea[@id='bio']").fill("Be yourself!");

        // Input - rating
        await page.locator("//input[@id='rating']").fill('9');

        // input - color
        await page.locator("//input[@id='favcolor']").fill('#2b00ff');

        //Hover
        await page.locator("//div[contains(text(), 'Hover over me')]").hover();
        await page.waitForTimeout(3000);

        // checkbox: Newsletter
        await page.locator("//input[@id='newsletter']").check();

        // span: Enable Feature
        await page.locator("//span[@class='slider round']").click();
    });

    await test.step('Click button Register', async () => {
        // click button Register
        await page.locator("//button[text() = 'Register']").click({
            delay: 2_000
        });
    });
});