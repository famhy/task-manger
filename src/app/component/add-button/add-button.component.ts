import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css',
})
export class AddButtonComponent implements OnInit {
  constructor(private uiService: UiService) {}
  ngOnInit(): void {}

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
