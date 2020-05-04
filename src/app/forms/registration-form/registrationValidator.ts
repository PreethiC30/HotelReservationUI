import {AbstractControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LoginService} from 'src/app/services/LoginService';
import { map } from 'rxjs/operators';

export class registrationValidator{
    static validateUsername(loginservice:LoginService){
return (control:AbstractControl)=>{
    return loginservice.validateemail(control.value).pipe(map(res=>{
        console.log("val"+res);
        return res ? {duplicateEmail:true}:null;
    }));
       };
    }
}