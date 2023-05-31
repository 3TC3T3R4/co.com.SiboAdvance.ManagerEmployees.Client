import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sibo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {
  routeMainEmployee: string[];
  routeMainEmployee2: string[];


  constructor() {
    this.routeMainEmployee = ['employee'];
    this.routeMainEmployee2 = ['dashboard'];
  }

  
}
