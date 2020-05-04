import { NgModule } from '@angular/core';
import { RouterModule,Route } from '@angular/router';
import {RegistrationFormComponent} from './forms/registration-form/registration-form.component';
import {LoginComponent} from './components/login/login.component';
const routes: Route[] = [
  {
    path: 'registration', component: RegistrationFormComponent
  },
  { path: 'login', component: LoginComponent },
 // { path: 'logout', component: LogoutComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),// to tell Angular Router that router configuration 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
