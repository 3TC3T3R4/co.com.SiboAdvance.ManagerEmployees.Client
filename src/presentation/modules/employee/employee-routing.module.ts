import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainEmployeeComponent } from './pages/main-employee/main-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutsComponent } from 'src/presentation/shared/layouts/app-layouts/app-layouts.component';
const routes: Routes = [
  
      {
        path: '',
        component: MainEmployeeComponent,
      },
    
    
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule { }
