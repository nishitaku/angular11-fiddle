import { Injectable } from '@angular/core';
import { Todo } from 'src/app/pages/first/models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  fetchedTodo?: Todo;

  constructor() {}

  async fetchTodo(): Promise<Todo> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.fetchedTodo = new Todo('fetched');
        resolve(this.fetchedTodo);
      }, 1000);
    });
  }

  updateFetchedTodoTitle(): void {
    if (this.fetchedTodo) {
      this.fetchedTodo.title = 'updated fetched';
    }
  }
}
