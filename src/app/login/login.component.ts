import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule , CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //  onSubmit(form:any){
  //     if(form?.valid){
  //       console.log(form.value)
  //     }
  //     else{
  //       alert('please enter valid credentails')
  //     }
  //  }
}
