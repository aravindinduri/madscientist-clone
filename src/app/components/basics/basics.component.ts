import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basics.component.html',
  styleUrl: './basics.component.css'
})
export class BasicsComponent {
  Name = "Aravind"
  isBtnDisabled = true

  onChange(e:Event){
    console.log(e.target)
 }

 students = [
  {name:"aravind",Branch:'CSE',Year : 'III'},
  {name:"Ajay",Branch:'ECE',Year : 'II'},
  {name:"Nagaraju",Branch:'CE',Year : 'III'},
]


}
