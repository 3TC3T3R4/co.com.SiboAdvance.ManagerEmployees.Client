import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sibo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  implements OnInit {
  render!: boolean;

  constructor(
    //private toastr: ToastrService
  ) {
    // setTimeout(() => {
    //   this.render = true;
    // }, 400);
  }

  ngOnInit(): void {
    // this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
