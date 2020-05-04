import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder ,ValidatorFn,AbstractControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { registrationValidator } from 'src/app/forms/registration-form/registrationValidator';
import {LoginService} from 'src/app/services/LoginService';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
 
  constructor(private http:HttpClient,private loginService:LoginService){
  }
  
  
  seekerForm: FormGroup = new FormGroup({
      email :new FormControl("", [Validators.required,Validators.email],registrationValidator.validateUsername(this.loginService)) ,
      password :new FormControl(null, [Validators.required,Validators.minLength(3)]) ,
      firstName :new FormControl(null, [Validators.required]) ,
      lastName :new FormControl(null, [Validators.required]) ,
      phoneNo :new FormControl(null, [Validators.required]) ,
      role :new FormControl(null, [Validators.required]) ,

  });
  
  
  ngOnInit() {
  }
   
  /* validateUsername(){
    console.log(this.);
    this.http.get("http://localhost:8080/validateuserexists/"+email).subscribe((data)=>{},(err)=>{});
} */

get email(){
  return this.seekerForm.get("email");
}
  
  addSeeker() {

    if(this.seekerForm.valid){
     
       console.log(this.seekerForm.value);
       this.http.post("http://localhost:8080/register",this.seekerForm.value).subscribe((data)=>{console.log('success',data),alert('Registration successful')},
       (err)=>console.log('error',err),);
     /* this.seekerService.addSeeker(this.seekerForm.value).subscribe(
        (data)=>{ console.log('success',data) ,alert('Resitration successful')},
        (err)=>console.log('error',err),
        
      );*/
    } else{
      console.log(this.seekerForm.getError.name);
        alert('Please provide all mandatory detials');
    }
  }

  reset(){
 this.seekerForm.reset();
  }
}


