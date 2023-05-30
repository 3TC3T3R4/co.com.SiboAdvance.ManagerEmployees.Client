import { Component } from '@angular/core';
import { TaskserviceService } from '../../services/taskservice.service';

@Component({
  selector: 'sibo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(private readonly auth$:TaskserviceService) {}



  authVariable():void{


    this.auth$.GoogleAuth();


  }


}
