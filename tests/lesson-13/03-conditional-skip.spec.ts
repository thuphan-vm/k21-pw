import { test, expect } from '@playwright/test';

// Conditional skip
test('Conditional skip', async ({ browserName }) => {
    if (browserName !== 'firefox') {
        test.skip();
    }
    console.log(browserName);
});