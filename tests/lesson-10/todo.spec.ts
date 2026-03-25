import { test, expect } from '@playwright/test';
import { ToDoPage } from './todo.page';

test.describe('ToDo Page Tests', () => {
    let toDoPage: ToDoPage;

    test.beforeEach(async ({ page }) => {
        toDoPage = new ToDoPage(page);
        await toDoPage.goto();
    });

    test('should input task name successfully', async () => {
        await toDoPage.addTask('task1');
    });
});