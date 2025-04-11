
import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = signal<Task[]>()
  constructor() {
  }
  getTasks(){
    return this.tasks();
  }
  addTask(), toggleTaskCompletion();
}
