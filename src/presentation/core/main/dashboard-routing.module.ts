import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutsComponent } from 'src/presentation/shared/layouts/app-layouts/app-layouts.component';

const routes: Routes = [
  
  
      {
        path: '',
        component: DashboardComponent,
      }
    
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
  
 }
