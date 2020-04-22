import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  template: `
  <nav class="navbar navbar-default" style="background-color:#333;">
  <div class="collapse navbar-collapse">
      <div class="navbar-header">
          <!-- <a class="navbar-brand">
            <img src="assets/signup-img.jpg" class="logo">
          </a> -->
          <span class="navbar-brand"></span>
   
      <ul class="nav justify-content-end">      
          <li class="nav-item"><a class="nav-link" routerLink="registraiton">Register</a> </li>  
         <!--  <li> <a class="navbar-item" routerLink="addrequirement">Add Requirement</a> </li>  
          <li> <a class="navbar-item" routerLink="seekerslist">Seeker List</a> </li>
          <li>  <a class="navbar-item" routerLink="seekerprofile">SeekerProfile</a>  </li>
          <li> <a class="navbar-item" routerLink="getrequirementlist">Posted Requirements</a> </li>  -->
          <li class="nav-item"> <a class="nav-link" routerLink="login">Login</a> </li>  
      </ul>
      </div>
  </div>
</nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
/*<a class="navbar-item" routerLink="">Home</a>
  // <a class="navbar-item" routerLink="seekerprofile">SeekerProfile</a>
<a class="navbar-item" routerLink="contact">Contact</a> */



   /* <nav class="navbar is-dark">
    <!-- logo -->
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="assets/img/angular-logo.png">
      </a>
    </div>
    <!-- menu -->
    <div class="navbar-menu">
      <div class="navbar-start">
     

      </div>
    </div>
  </nav> */