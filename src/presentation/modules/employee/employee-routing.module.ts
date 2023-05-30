import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainEmployeeComponent } from './pages/main-employee/main-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from 'src/presentation/shared/layouts/app-layout/app-layout.component';

const routes: Routes = [
  
  {
    path: 'employee',
    // canActivate: [allowedRoles([Roles.Admin])],
    // canLoad: [allowedRoles([Roles.Admin])],
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        component: MainEmployeeComponent,
      },
    ],
  },
    
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule { }
