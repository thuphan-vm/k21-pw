import { test, expect } from "@playwright/test";
import { TodoApi } from "../../src/pom/todo.api";

test("Test: chaining request with POM", async ({ request }) => {
    const todoApi = new TodoApi(request);
    
    // Buoc 1: Goi API get --> id lon nhat
    const todos = await todoApi.getTodos();
    const firstTodoId = todos[0].id;

    // Buoc 2: Tao todo
    const createdTodo = await todoApi.createTodo("Phong - K21 - POM with API", "a simple description");
    const createdId = createdTodo.id;

    // Buoc 3: Expect todo vua tao co id > id o buoc 1
    expect(createdId).toBeGreaterThan(firstTodoId);
});