import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/presentation/core/security/pages/login/login.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'log-in',
    component: LoginComponent,
    // canActivate: [AngularFireAuthGuard],
    // data: { authGuardPipe: redirectLoggedInToDashboard },
  },
  {
    path: 'dashboard', // localhost:4200/dashboard
    loadChildren: () =>
      import('../presentation/core/main/dashboard.module').then(
        (module) => module.DashboardModule
      ),
    // canActivate: [AngularFireAuthGuard],
    // data: { authGuardPipe: redirectUnauthorizedToLogin },
  },

  {
    path: 'dashboard/employee',
    loadChildren: () =>
      import('src/presentation/modules/employee/employee.module').then(
        (module) => module.EmployeeModule
      ),
    // canActivate: [AngularFireAuthGuard],
    // data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
