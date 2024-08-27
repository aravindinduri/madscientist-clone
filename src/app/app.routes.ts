import { Routes } from '@angular/router';
import { BasicsComponent } from './components/basics/basics.component';
import { Form1Component } from './components/form1/form1.component';
import { Form2Component } from './components/form2/form2.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
export const routes: Routes = [
    { path: '', component:BasicsComponent},
    {path:'About',component:AboutComponent},
    {path:'Form-1',component:Form1Component},
    {path:'Form-2',component:Form2Component},
    { path: '**', component: NotFoundComponentComponent }

  
  ];

  export class AppRoutingModule { }
