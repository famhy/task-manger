import { Injectable } from '@angular/core';
import { TaskType } from '../types/task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: TaskType[] = [
    {
      id: 1,
      text: 'shopping',
      day: '23/08/2024',
      reminder: true,
    },
    {
      id: 2,
      text: 'shopping 2',
      day: '24/08/2024',
      reminder: false,
    },
  ];
  constructor() {}

  getTasks(): Observable<TaskType[]> {
    return of(this.tasks);
  }
}
