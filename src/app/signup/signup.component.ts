import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, Validators, FormGroup , FormControl, AbstractControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule , FormsModule , ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
   signup = new FormGroup({
     email : new FormControl(null , [ Validators.email , Validators.required]),
     password : new FormControl( null, [ 
      Validators.required, 
      Validators.minLength(8) ,
      this.hasUpper, 
      this.hasDigit, 
      this.hasSpecialChar 
    ]),
     cnpassword : new FormControl(null , [Validators.required]),
     mobile : new FormControl(null, [Validators.required , Validators.minLength(10)])
   } , { validators : this.passwordConfirming});

   hasUpper(control: any){
    let hasUpperCase = /[A-Z]/;
    if(!hasUpperCase.test(control?.value)) return { "noUpperCase" : true};
    return null;
   };

   hasDigit(control: any){
    let hasDigit = /\d/;
    if(!hasDigit.test(control?.value)) return { "noDigit" : true};
    return null
   }

   hasSpecialChar(control: any){
    let hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    if(!hasSpecialChar.test(control.value)) return { "noSpecialChar" : true};
    return null
   };

   isPasswordMatch( form : any){
     let passwordValue : string = form.get('password')?.value;
     let confirmPasswordValue: string = form.get('cnpassword')?.value;
     return passwordValue === confirmPasswordValue ? null : { noPasswordMatch: true };

   }

   passwordConfirming(c: AbstractControl): { noPasswordMatch: boolean } {
    if (c.get('password')?.value !== c.get('cnpassword')?.value) {
        return {noPasswordMatch: true};
    }
    return {noPasswordMatch: false};
  }

   
   show(){
     console.log(this.signup)
   }

  //  onSubmit(formGroup:any){
  //   if(formGroup.valid){
  //     console.log(formGroup?.value)
  //   }
  //   else{
  //     alert("All feilds should be valid")
  //   }
  //  }
}
