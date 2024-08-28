import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicsComponent } from './components/basics/basics.component';
import { NavbarComponent } from './components/navbar/navbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BasicsComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
