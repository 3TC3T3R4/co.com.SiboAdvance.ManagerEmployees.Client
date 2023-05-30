import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreateEmployeeUseCase } from 'src/bussiness/useCases/employee/create-employee.usecase';

@Component({
  selector: 'sibo-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent {
  
  frmFormReactive : FormGroup;
  routergoBackMenu: string[];


  constructor(private createEmployeeUseCase: CreateEmployeeUseCase, private router: Router,private toastr: ToastrService) {

    this.routergoBackMenu = ['dashboard'];
    this.frmFormReactive = new FormGroup({
        subArea_id: new FormControl('', [Validators.required]),
        typeDocument: new FormControl('', [Validators.required]),
        number_ID: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        
    });
    

  }

  sendData() {
    this.createEmployeeUseCase.execute(
      this.frmFormReactive.getRawValue()
   ).subscribe(
      (data) => {
        this.toastr.success('Employee created successfully.', '', {
          timeOut: 3500,
          positionClass: 'toast-bottom-right',
        });

      },
      (error) => {
        this.toastr.success('Employee created successfully.', '', {
          timeOut: 3500,
          positionClass: 'toast-bottom-right',
        });
        this.router.navigate(this.routergoBackMenu);
      }


    );
    
  }
}
