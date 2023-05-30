
import { Router } from '@angular/router';
import {
  Component,
  OnInit,
  NgModule,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
@Component({
  selector: 'sibo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  routeMainUsers: string[];
  routeMainRegistrations: string[];
  constructor(private router: Router){
    this.routeMainRegistrations = ['registrations'];
    this.routeMainUsers = ['users'];
    
  }
  ngOnInit(): void {
    
  }
}
