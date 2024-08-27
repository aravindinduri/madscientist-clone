import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})
export class Form2Component {
  email =new FormControl("",[
    Validators.required,
    Validators.email
  ])

  password = new FormControl("",[
    Validators.required,
    Validators.minLength(6)
  ])

  loginForm = new FormGroup({
    email:this.email,
    password:this.password
  })

  login(){
    console.log("User Logged In Succesfull")
  }
  reset(){
    this.loginForm.reset()
  }
}
