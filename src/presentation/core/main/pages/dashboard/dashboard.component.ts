import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sibo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {
  routeMainEmployee: string[];


  constructor() {
    this.routeMainEmployee = ['dashboard/employee'];
  }

  
}
