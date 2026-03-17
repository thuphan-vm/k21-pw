import { APIRequestContext } from "@playwright/test";

export class TodoApi {
    request: APIRequestContext;
    baseURL: string;

    constructor(request: APIRequestContext) {
        this.request = request;
        this.baseURL = "https://material.playwrightvn.com/api/todo-app/v1/";
    }

    // https://material.playwrightvn.com/api/todo-app/v1
    async getTodos() {
        const response = await this.request.get(`${this.baseURL}/todos.php`);
        const body = await response.json();

        return body.todos;
    }

    async getTodo(id: number) {
        const response = await this.request.get(`${this.baseURL}/todo.php?id=${id}`);
        const body = await response.json();

        return body.todo;
    }

    // {
    //         "title": "Phong - K21 from Playwright",
    //         "description": "Demo API testing",
    //         "status": "pending",
    //         "priority": "high",
    //     }
    async createTodo(title: string, description: string) {
        const createdResponse = await this.request.post(`${this.baseURL}/todo.php`, {
            data: {
                "title": title,
                "description": description,
            }
        });
        const createdBody = await createdResponse.json();
        
        return createdBody.todo;
    }

}