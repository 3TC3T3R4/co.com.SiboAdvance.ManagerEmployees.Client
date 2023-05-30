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





  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
