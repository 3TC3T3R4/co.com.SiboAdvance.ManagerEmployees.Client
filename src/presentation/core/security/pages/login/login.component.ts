import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'sibo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(private readonly auth$:AuthService) {}

  authVariable():void{


    this.auth$.GoogleAuth();


  }


}
