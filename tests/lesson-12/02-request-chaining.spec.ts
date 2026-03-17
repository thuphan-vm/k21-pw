import { test, expect } from '@playwright/test';

test("Test: chaining request", async ({ request }) => {
    // Buoc 1: Goi API get --> id lon nhat
    const response = await request.get("https://material.playwrightvn.com/api/todo-app/v1/todos.php");
    const body = await response.json();
    const firstTodoId = body.todos[0].id

    // Buoc 2: Tao todo
    const createdResponse = await request.post('https://material.playwrightvn.com/api/todo-app/v1/todo.php', {
        data: {
            "title": "Phong - K21 from Playwright",
            "description": "Demo API testing",
            "status": "pending",
            "priority": "high",
            "due_date": "2025-10-25T17:00:00",
            "user_id": 1
        }
    });
    const createdBody = await createdResponse.json();
    const createdId = createdBody.todo.id;

    // Buoc 3: Expect todo vua tao co id > id o buoc 1
    expect(createdId).toBeGreaterThan(firstTodoId);
});