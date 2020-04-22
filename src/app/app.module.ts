import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatNativeDateModule,MatDatepickerModule,MatInputModule,MatSelectModule } from '@angular/material';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {RegistrationFormComponent} from './forms/registration-form/registration-form.component';
import {HeaderComponent} from './core/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //AppRoutingModule,
HttpClientModule,
    ReactiveFormsModule,
  MatDatepickerModule,
MatNativeDateModule,
MatInputModule,
MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
