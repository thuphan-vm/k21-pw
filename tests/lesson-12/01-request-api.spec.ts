import { test, expect } from '@playwright/test';

// test('Test 01: API get', async ({ request }) => {
//     const response = await request.get('https://material.playwrightvn.com/api/todo-app/v1/todos.php');
//     const statusCode = response.status();
//     const headers = response.headers();
//     const body = await response.json();

//     console.log(statusCode);
//     console.log(headers);
//     console.log(body);

//     // Lay ra todo dau tien
//     const firstTodo = body.todos[0];
//     expect(firstTodo.id).toEqual(16);
// });

// test('Test 02: API get single', async ({ request }) => {
//     const response = await request.get('https://material.playwrightvn.com/api/todo-app/v1/todo.php?id=6');
//     const statusCode = response.status();
//     const headers = response.headers();
//     const body = await response.json();

//     console.log(statusCode);
//     console.log(headers);
//     console.log(body);

//     // Lay ra todo dau tien
//     const todoItem = body.todo;
//     expect(todoItem.id).toBe(6);
//     expect(todoItem.title).toEqual("Lớp k21");
// });

test('Test 03: API post', async ({ request }) => {
    const response = await request.post('https://material.playwrightvn.com/api/todo-app/v1/todo.php', {
        data: {
            "title": "ThuPhan",
            "description": "Write comprehensive docs for the API",
            "status": "completed",
            "priority": "high",
            "due_date": "2026-03-17T17:00:00",
            "user_id": 1
        }
    });
    const statusCode = response.status();
    const headers = response.headers();
    const body = await response.json();

    console.log(statusCode);
    console.log(headers);
    console.log(body);

    // Lay ra todo dau tien
    const createTodo = body.todo;

    expect(createTodo.id).toBeGreaterThan(17);
    expect(createTodo.title).toEqual("ThuPhan");

})