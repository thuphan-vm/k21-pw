import { Locator, Page } from "@playwright/test";

//gist.github.com : share code

export class RegisterPage {
    // Khai báo page và các locator
    page: Page;
    usernameInput: Locator;
    emailInput: Locator;
    submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        // Khởi tạo locator trong constructor
        this.usernameInput = page.locator('#username');
        this.emailInput = page.locator('#email');
        this.submitButton = page.locator('button[type="submit"]');
    }

    // Method điều hướng đến trang
    async goto() {
        await this.page.goto(
            'https://material.playwrightvn.com/01-xpath-register-page.html'
        );
    }
    // Method thực hiện đăng ký
    async register(
        username: string,
        email: string,
    ) {
        await this.usernameInput.fill(username);
        await this.emailInput.fill(email);
        await this.clickSubmit();
    }

    // Method click nút submit
    async clickSubmit() {
        await this.submitButton.click();
    }
}