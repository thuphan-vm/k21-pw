import { test, expect } from '@playwright/test';
import { RegisterPage } from './register.page';

test.describe('Register Page Tests', () => {
    let registerPage: RegisterPage;

    test.beforeEach(async ({ page }) => {
        registerPage = new RegisterPage(page);
        await registerPage.goto();
    });

    test('should register successfully', async () => {
        await registerPage.register(
            'johndoe',
            'john@example.com',
        );
    });

    test('should show error for empty fields', async () => {
        await registerPage.clickSubmit();
    });
});