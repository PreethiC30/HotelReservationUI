import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/LoginService';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup = new FormGroup({
    email :new FormControl(null, [Validators.required]) ,
    password :new FormControl(null, [Validators.required]) ,
  })

  constructor(private loginService :LoginService) { }


  ngOnInit() {
  }


  loginUser() {
    console.log("im in login")
     // this.email =this.LoginForm.get('email');
     // this.password= this.LoginForm.get('password');
    //this.loginService.loginuser(this.LoginForm.value);
    this.loginService.loginuser(this.LoginForm.value);
    /*  this.seekerService.getSeeker(this.LoginForm.get('email')).subscribe( 
      (user) => {
       console.log('success',user)
       this.loginService.loginuser(user) 
  },
    (err)=>console.log('error',err)
  );  */
  }

  logOutUser() {
    console.log("im in login")
    this.loginService.logOutUser;
  }

}

export class UserLogin {
  email: string;
  password: string;
}
