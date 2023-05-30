import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetAllEmployeeUseCase } from 'src/bussiness/useCases/employee/get-all-employee.usecase';
import { EmployeeModel } from 'src/domain/models/employee/employee.model';
import { CreateEmployeeUseCase } from 'src/bussiness/useCases/employee/create-employee.usecase';

@Component({
  selector: 'sibo-main-employee',
  templateUrl: './main-employee.component.html',
  styleUrls: ['./main-employee.component.scss']
})
export class MainEmployeeComponent implements OnInit{

 //routes
 routeDashboard: string[];

 //variables
 render!: boolean;
 empty: boolean;
 employeeList!: EmployeeModel[];

 //search
 searching = false;
 filteredemployee!: EmployeeModel[];

 //pagination
 employeePerPageTable: number = 10;
 page: number = 1;
 pages: number[] = [];
 totalPages: number = 0;

 //forms
 frmCreateEmployee: FormGroup;
 //generatedPassword: string = '';

 constructor(
   private getAllEmployeesUseCase: GetAllEmployeeUseCase, private createEmployeeUseCase: CreateEmployeeUseCase
   //private $auth: AuthService
 ) {
   this.routeDashboard = ['../'];
   this.empty = true;

   this.frmCreateEmployee = new FormGroup({
    subArea_id: new FormControl('', [Validators.required]),
    typeDocument: new FormControl('', [Validators.required]),
    number_ID: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
   });
   setTimeout(() => {
     this.render = true;
   }, 1800);
 }

 ngOnInit(): void {
   this.getAllEmployees();
   setTimeout(() => {
     this.calculatePages();
   }, 500);
 }

 //#region create user
 sendData() {
   this.createEmployeeUseCase.execute(
     this.frmCreateEmployee.getRawValue()
  );
   this.getAllEmployees();
 }
 //#endregion

 //#region consults
 getAllEmployees() {
   let subGetUsers = this.getAllEmployeesUseCase.execute().subscribe({
     next: (data) => {
       this.employeeList = data;
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
    employee.name.toLowerCase().includes(term.toLowerCase()) ||
    employee.number_ID
  );
}



}
