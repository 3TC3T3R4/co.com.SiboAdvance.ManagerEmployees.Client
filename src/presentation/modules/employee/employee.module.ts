import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainEmployeeComponent } from './pages/main-employee/main-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { DashboardRoutingModule } from 'src/presentation/core/main/dashboard-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainEmployeeComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
    DashboardRoutingModule,
    RouterModule
  ]
})
export class EmployeeModule { }
