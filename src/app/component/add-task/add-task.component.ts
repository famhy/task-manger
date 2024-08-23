import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent implements OnInit {
  showAddTask: boolean = true;

  text = new FormControl('');
  day = new FormControl('');
  reminder = new FormControl(false);

  constructor(private uiService: UiService) {}
  ngOnInit(): void {
    this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  onSubmit(e: Event) {
    // e.preventDefault();

    alert(this.text.value + ' ' + this.day.value + ' ' + this.reminder.value);
  }
}
