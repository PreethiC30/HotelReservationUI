import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
//import { SeekerService } from 'src/app/services/seeker.service';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {

  seekerForm: FormGroup = new FormGroup({
      email :new FormControl(null, [Validators.required,Validators.email]) ,
      password :new FormControl(null, [Validators.required,Validators.minLength(3)]) ,
      firstName :new FormControl(null, [Validators.required]) ,
      lastName :new FormControl(null, [Validators.required]) ,
      companyName :new FormControl(null, [Validators.required]) ,
      phoneNo :new FormControl(null, [Validators.required]) ,
      role :new FormControl(null, [Validators.required]) ,

  });
  //constructor( private seekerService:SeekerService){};

  ngOnInit() {
  }
  addSeeker() {

    if(this.seekerForm.valid){
     
       console.log(this.seekerForm.value);
     /* this.seekerService.addSeeker(this.seekerForm.value).subscribe(
        (data)=>{ console.log('success',data) ,alert('Resitration successful')},
        (err)=>console.log('error',err),
        
      );*/
    } else{
        alert('Please provide all mandatory detials');
    }
  }
}
