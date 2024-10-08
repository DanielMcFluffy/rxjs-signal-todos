import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../models/todo';
import { ToastService } from './toast.service';

const Todos: Todo[] = [
  { id: 1, title: 'Todo 1',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    completed: true, created_at: '2021-01-01', updated_at: '2021-01-01' },
  { id: 2, title: 'Todo 2',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    completed: false, created_at: '2021-01-01', updated_at: '2021-01-01' },
  { id: 3, title: 'Todo 3',
    description:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    completed: false, created_at: '2021-01-01', updated_at: '2021-01-01' },
  { id: 4, title: 'Todo 4',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    completed: false, created_at: '2021-01-01', updated_at: '2021-01-01' },
]

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  toastService = inject(ToastService);
  
  getTodos(): Observable<Todo[]> {
    return of<Todo[]>(Todos)
  }

  getTodo(id: number): Observable<Todo | undefined> {
    return of(Todos.find(todo => todo.id === id));
  }

  addTodo(todo: Todo): void {
    Todos.push(todo);
    this.toastService.setToast('success', 'Todo added successfully');
    this.toastService.showToast();
    setTimeout(() => {
      this.toastService.hideToast();
    }, 2000);
  }

  updateTodo(id: number, todo: Partial<Todo>) {
    const index = Todos.findIndex(todo => todo.id === id);
    Todos[index] = { ...Todos[index], ...todo };
    this.toastService.setToast('success', 'Todo updated successfully');
    this.toastService.showToast();
    setTimeout(() => {
      this.toastService.hideToast();
    }, 2000);
  }

  deleteTodo(id: number) {
    const index = Todos.findIndex(todo => todo.id === id);
    Todos.splice(index, 1);
    this.toastService.setToast('success', 'Todo deleted successfully');
    this.toastService.showToast();
    setTimeout(() => {
      this.toastService.hideToast();
    }, 2000);
  }
}
