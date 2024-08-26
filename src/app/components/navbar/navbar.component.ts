import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // If using Angular common directives

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule], // Import any other modules you use
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() someInput: string = ''; // Example input property
}
