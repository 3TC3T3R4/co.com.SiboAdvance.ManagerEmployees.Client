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
    private afAuth: AngularFireAuth,private createUserUseCase: CreateUserUseCase) { 
    let userToCreate: CreateUserCommand;
    }



  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['dashboard']);
    });
  }



  private AuthLogin(provider: any) {

    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
       console.log(result);
        localStorage.setItem('user', JSON.stringify(result.user?.email?.valueOf()));
        localStorage.setItem('name', JSON.stringify(result.user?.displayName?.valueOf()));
        localStorage.setItem('uid', JSON.stringify(result.user?.uid?.valueOf()));
        localStorage.setItem('prov', JSON.stringify(result.user?.providerId));
        result.user?.getIdToken().then((token =>localStorage.setItem('token', token)));
       const token = localStorage.getItem('token') ?? '';
      

       const userToCreate = {

        id_fire: localStorage.getItem('uid') as string ?? '',
        user: localStorage.getItem('user') ?? '',
        password: localStorage.getItem('prov') ?? ''
        
      };
        this.createUserUseCase.execute(userToCreate).subscribe((res: any) => {

        });
      
      })

      




  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('uid');
      localStorage.removeItem('token');
      //this.router.navigate(['EstacolNews/login']);
    });
  }


}
