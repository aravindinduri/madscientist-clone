import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.css'
})
export class Form1Component {

  register(regForm:NgForm){
    console.log(regForm.value)

  }
  reset(regForm:NgForm){
    regForm.reset()
  }
}
