import { Locator, Page } from "@playwright/test";

export class ToDoPage {
    // Khai báo page và các locator
    page: Page;
    toDoHeading: Locator;
    newTaskInput: Locator;
    addButton: Locator;

    constructor(page: Page) {
        this.page = page;
        // Khởi tạo locator trong constructor
        this.toDoHeading  = page.locator('h1');
        this.newTaskInput = page.locator('#new-task');
        this.addButton = page.locator('#add-task');
    }

    // Method điều hướng đến trang
    async goto() {
        await this.page.goto(
            'https://material.playwrightvn.com/03-xpath-todo-list.html'
        );
    }

    // Method thực hiện add Task
    async addTask(newTask: string) {
        await this.newTaskInput.fill(newTask);
        await this.addButton.click();
    }
}