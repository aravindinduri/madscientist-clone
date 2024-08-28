import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataFetchingService } from '../../services/data-fetching.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-basics',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']  // Ensure this is correctly pluralized
})
export class BasicsComponent {
  Name = "Aravind";
  isBtnDisabled = true;

  onChange(e: Event) {
    console.log(e.target);
  }

  students = [
    { name: "aravind", Branch: 'CSE', Year: 'III' },
    { name: "Ajay", Branch: 'ECE', Year: 'II' },
    { name: "Nagaraju", Branch: 'CE', Year: 'III' },
  ];
}
