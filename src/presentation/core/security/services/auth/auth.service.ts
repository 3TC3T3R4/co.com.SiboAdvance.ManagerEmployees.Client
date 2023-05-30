import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import { CreateUserUseCase } from 'src/bussiness/useCases/user/create-user.usecase';
import { CreateUserCommand } from 'src/domain/commands/user/newUserCommands';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  
  constructor(private router: Router,private  httClient: HttpClient,
    private afAuth: AngularFireAuth,private createUserUseCase: CreateUserUseCase) { }



  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['Sibo/dashboard']);
    });
  }



  private AuthLogin(provider: any) {

    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['Sibo/dashboard']);
       console.log(result);
        localStorage.setItem('user', JSON.stringify(result.user?.email?.valueOf()));
        localStorage.setItem('name', JSON.stringify(result.user?.displayName?.valueOf()));
        localStorage.setItem('uid', result.user?.uid?? '');
        result.user?.getIdToken().then((token =>localStorage.setItem('token', token)));
        localStorage.setItem('prov', JSON.stringify(result.user?.providerId));
       const token = localStorage.getItem('token') ?? '';

       const user = new CreateUserCommand(

        localStorage.getItem('uid') ?? '',
        localStorage.getItem('user') ?? '{}',
        localStorage.getItem('prov') ?? ''

       );
        this.createUserUseCase.execute(user).subscribe((res: any) => {


        });
      
      
      
      })

      




  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('uid');
      localStorage.removeItem('token');
      this.router.navigate(['EstacolNews/login']);
    });
  }


}
