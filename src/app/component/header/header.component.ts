import { Component } from '@angular/core';
import { AddButtonComponent } from '../add-button/add-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AddButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
