import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainEmployeeComponent } from './pages/main-employee/main-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { DashboardRoutingModule } from 'src/presentation/core/main/dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { CreateEmployeeComponent } from './pages/create-employee/create-employee.component';



@NgModule({
  declarations: [
    MainEmployeeComponent,
    CreateEmployeeComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
    DashboardRoutingModule,
    RouterModule,
    ToastrModule.forRoot()
    
  ]
})
export class EmployeeModule { }
