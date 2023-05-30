import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRepository } from 'src/bussiness/repositories/employee/employee.repository';
import { EmployeeImplementationRepository } from './employee-implementation.repository';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
    providers: [
        // createContentUseCaseProvider,
        // updateContentUseCaseProvider,
        // getAllContentUseCaseProvider,
        // getContentByIdUseCaseProvider,
        { provide: EmployeeRepository, useClass: EmployeeImplementationRepository},
],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class EmployeeModule { }
