import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UserLogin} from 'src/app/components/login/login.component'
import { map } from 'rxjs/operators';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient,private loginService: LoginService ) {
  }

private _loginUrl = "http://localhost:8080/login"; 
//private _getSeekerByIdApiUrl = `${environment.baseUrl}/getseeker`;

  loginuser(seeker:UserLogin) {
    // console.log("im in " + this._loginUrl );
     console.log("User email" + seeker.email);
    console.log("User password" + seeker.password);
    return  this.http.post(this._loginUrl,seeker).subscribe((data)=>{console.log('success',data),alert('Login successful')},(err)=>console.log('error',err),);
  }
  logOutUser() {
    // return this.http.get(this.http)
  }

  validateemail(email:string){
    return this.http.get("http://localhost:8080/validateuserexists/"+email).pipe(
      map((res: Response) =>{
        console.log("service"+res);
        if (res) {
          return true;
        } else {
          return false;
        }
      },
      (error) => {
        console.log(error);
      }
    )); 
  }
}
