import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(public countService:CounterService){}

}
