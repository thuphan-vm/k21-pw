import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
    await page.goto('https://playwright.dev');
    await expect(page).toHaveScreenshot();
});

test('example test 02 full page', async ({ page }) => {
    await page.goto('https://playwright.dev');
    await expect(page).toHaveScreenshot({ fullPage: true });
});

test('example test 03', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    const adsLoc = page.locator('#ads-here');
    await expect(page).toHaveScreenshot({
        fullPage: true,
        mask: [
            adsLoc,
        ],
        maskColor: '#000000'
    });
});

test('example test 04', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    const adsLoc = page.locator('#ads-here');

    await page.waitForTimeout(2_000);

    await expect(page).toHaveScreenshot({
        mask: [
            adsLoc,
        ],
        maskColor: '#000000'
    });

    await page.getByText('Bài học 2: Product page').click();

    await expect(page).toHaveScreenshot({
        mask: [
            adsLoc,
        ],
        maskColor: "#d61212"
    })

});


test('example test 05', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/017-detect-user-agent.html');
    await expect(page).toHaveScreenshot();
});

test('test emulation', async ({ page }) => {
    test.use({
        locale: 'en-GB',
        timezoneId: 'Europe/Paris',
    });


    test('example test 05', async ({ page }) => {
        await page.goto('https://material.playwrightvn.com/017-detect-user-agent.html');
        await expect(page).toHaveScreenshot();
    });
});

test('exaple test DnD', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/05-xpath-drag-and-drop.html');

    for (let i = 1; i <= 4; i++) {
        const startLoc = page.locator(`#piece-${i}`);
        const endLoc = page.locator(`//div[@data-piece='${i}']`);

        await startLoc.dragTo(endLoc);
    }
});

// make it work
// make it right
// make it fast
// Over optimization (too early optimization)

