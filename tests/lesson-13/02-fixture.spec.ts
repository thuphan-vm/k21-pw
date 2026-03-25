// test('Multiple browser', async ({ browser }) => {
//    const context1 = await browser.newContext();
//    const page1 = await context1.newPage();
//    await page1.goto("https://google.com");

import test from "@playwright/test";

   
test('Multiple browser', async ({ browser }) => {
   const context1 = await browser.newContext();
   const page1 = await context1.newPage();
   await page1.goto("https://google.com");
   
   const context2 = await browser.newContext();
   const page2 = await context2.newPage();
   await page2.goto("https://youtube.com");

   await page1.goto("https://e-commerce-dev.betterbytesvn.com");

   console.log("Stop here");
});

test('Multiple tab', async ({ context, page }) => {
   const page1 = await context.newPage();
   const page2 = await context.newPage();
   
   await page.goto("https://youtube.com");
   await page1.goto("https://google.com");
   await page2.goto("https://fb.com");
});