import { Component, Input } from '@angular/core';
import { TaskType } from '../../types/task';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task: TaskType = {
    text: '',
    day: '',
    reminder: false,
  };
}
