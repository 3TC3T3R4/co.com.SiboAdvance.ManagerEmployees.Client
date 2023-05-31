import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetAllEmployeeUseCase } from 'src/bussiness/useCases/employee/get-all-employee.usecase';
import { EmployeeModel } from 'src/domain/models/employee/employee.model';
import { CreateEmployeeUseCase } from 'src/bussiness/useCases/employee/create-employee.usecase';
import { GetEmployeeByIdUseCase } from 'src/bussiness/useCases/employee/get-employee.usecase';
import { UpdateEmployeeUseCase } from 'src/bussiness/useCases/employee/update-employee.usecase';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'sibo-main-employee',
  templateUrl: './main-employee.component.html',
  styleUrls: ['./main-employee.component.scss']
})
export class MainEmployeeComponent implements OnInit {


  @Input()
  placeholder: string = '';

  @Output()
  onValue = new EventEmitter<string>()

  emitValue(value: string): void {
    this.onValue.emit(value);
  }


 //routes
 routeDashboard: string[];
 routerPostTask: string[];
 routeMainEmployee2: string[];

 //variables
 render!: boolean;
 empty: boolean;
 employeeList!: EmployeeModel[];
 employees_id!:number;
//search
 searching = false;
 filteredemployee!: EmployeeModel[];

 //pagination
 employeePerPageTable: number = 9;
 page: number = 1;
 pages: number[] = [];
 totalPages: number = 0;

 //forms
 frmCreateEmployee: FormGroup;
 form: FormGroup;
 //frmFormReactive: FormGroup;
 constructor(
  private getAllEmployeeUseCase: GetAllEmployeeUseCase,
  private createEmployeeUseCase: CreateEmployeeUseCase,
  private updateEmployeeUseCase:  UpdateEmployeeUseCase,
  private getEmployeeByIdUseCase: GetEmployeeByIdUseCase,
  private toastr: ToastrService,
  private router: Router
) {

  this.routerPostTask = ['create/employee'];
  this.routeDashboard = ['dashboard'];
  this.routeMainEmployee2 = ['../'];
    
   this.render = true;
   this.empty = true;

   this.frmCreateEmployee = new FormGroup({
    subArea_id: new FormControl('', [Validators.required]),
    typeDocument: new FormControl('', [Validators.required]),
    number_ID: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    
     });

    this.form = new FormGroup({
      subArea_id: new FormControl(),
      typeDocument: new FormControl(),
      number_ID: new FormControl(),
      name: new FormControl(),
      lastName: new FormControl(),
    });






 }

 ngOnInit(): void {
   this.getAllEmployees();
   setTimeout(() => {
     this.calculatePages();
   }, 500);
 }

//  //#region create user
 sendData() {
   this.createEmployeeUseCase.execute(
     this.frmCreateEmployee.getRawValue()
  );
   this.getAllEmployees();
 }
  
 //#endregion

 
 //#region consults
 getAllEmployees() {
   let subGetUsers = this.getAllEmployeeUseCase.execute().subscribe({
     next: (data) => {
       this.employeeList = data;
       console.log(this.employeeList);
       this.empty = false;
     },
     error: (error) => {
       this.empty = true;
     },
     complete: () => {
       subGetUsers.unsubscribe();
     },
   });
 }
 
 //#endregion
 calculatePages(): void {
  this.totalPages = Math.ceil(this.employeeList.length / this.employeePerPageTable);
  this.pages = Array(this.totalPages)
    .fill(0)
    .map((x, i) => i + 1);
}


  searchByType(term: string): void {
  this.searching = true;
  this.filteredemployee = this.employeeList.filter((employee) =>
    employee.name.toLowerCase().includes(term.toLowerCase())
  );
}
modal(
      employees_id: number,
      subArea_idUpdate?: number,
      typeDocumentUpdate?:string,
      number_IDUpdate?:number ,
      nameUpdate?:string ,
      lastNameUpdate?: string
): void {
  this.employees_id = employees_id;
  this.form.get('subArea_id')?.setValue(subArea_idUpdate);
  this.form.get('typeDocument')?.setValue(typeDocumentUpdate);
  this.form.get('number_ID')?.setValue(number_IDUpdate);
  this.form.get('name')?.setValue(nameUpdate);
  this.form.get('lastName')?.setValue(lastNameUpdate);
}

sendUpdate(EmployeeId: number): void {
  this.getEmployeeByIdUseCase.execute(EmployeeId).subscribe({
    next: (data) => {
      let subUpdateTask = this.updateEmployeeUseCase
        .execute({ idEmployee: EmployeeId, employee: this.form.getRawValue() })
        .subscribe({
          next: (data) => {
            this.toastr.success('Employee updated successfully.', '', {
              timeOut: 2500,
              positionClass: 'toast-bottom-right',
            });
            this.getAllEmployees();
          },
          error: (error) => {
            this.toastr.error('Employee was no updated .', '', {
              timeOut: 2500,
              positionClass: 'toast-bottom-right',
            });
            this.getAllEmployees();
          },
          complete: () => {
            subUpdateTask.unsubscribe();
          },
        });
    },
  });
}
}
