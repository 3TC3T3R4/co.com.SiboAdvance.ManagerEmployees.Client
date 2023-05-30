import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserModule } from 'src/data/repositories/user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginComponent } from 'src/presentation/core/security/pages/login/login.component';
import { EmployeeModule } from 'src/data/repositories/employee/employee.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModule,
    EmployeeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
