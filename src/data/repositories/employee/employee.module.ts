import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRepository } from 'src/bussiness/repositories/employee/employee.repository';
import { EmployeeImplementationRepository } from './employee-implementation.repository';
import { HttpClientModule } from '@angular/common/http';
import { CreateEmployeeUseCase } from 'src/bussiness/useCases/employee/create-employee.usecase';
import { UpdateEmployeeUseCase } from 'src/bussiness/useCases/employee/update-employee.usecase';
import { GetAllEmployeeUseCase } from 'src/bussiness/useCases/employee/get-all-employee.usecase';
import { GetEmployeeByIdUseCase } from 'src/bussiness/useCases/employee/get-employee.usecase';
import { AreaRepository } from 'src/bussiness/repositories/area/area.repository';
import { GetAllAreasUseCase } from 'src/bussiness/useCases/area/get-all-area.usecase';
import { SubAreaRepository } from 'src/bussiness/repositories/subarea/subarea.repository';
import { GetAllSubAreaUseCase } from 'src/bussiness/useCases/subarea/get-all-subarea-byidarea.usecase';


const GetAllAreasUseCaseFactory = (areaRepo: AreaRepository) =>
  new GetAllAreasUseCase(areaRepo);
export const GetAllAreasUseCaseProvider = {
  provide: GetAllAreasUseCase,
  useFactory: GetAllAreasUseCaseFactory,
  deps: [AreaRepository]
};
const GetAllSubAreaUseCaseFactory = (subAreaRepo: SubAreaRepository) =>
  new GetAllSubAreaUseCase(subAreaRepo);
export const GetAllSubAreaUseCaseProvider = {
  provide: GetAllSubAreaUseCase,
  useFactory: GetAllSubAreaUseCaseFactory,
  deps: [SubAreaRepository]
};
const CreateEmployrrUseCaseFactory = (employeeRepo: EmployeeRepository) =>
  new CreateEmployeeUseCase(employeeRepo);
export const CreateEmployeeCaseProvider = {
  provide: CreateEmployeeUseCase,
  useFactory: CreateEmployrrUseCaseFactory,
  deps: [EmployeeRepository]
};

const UpdateEmployeeUseCaseFactory = (employeeRepo: EmployeeRepository) =>
  new UpdateEmployeeUseCase(employeeRepo);
export const UpdateUseCaseProvider = {
  provide: UpdateEmployeeUseCase,
  useFactory: UpdateEmployeeUseCaseFactory,
  deps: [EmployeeRepository]
};

const GetAllEmployeeUseCaseFactory = (employeeRepo: EmployeeRepository) =>
  new GetAllEmployeeUseCase(employeeRepo);
export const GetAllEmployeeUseCaseProvider = {
  provide: GetAllEmployeeUseCase,
  useFactory: GetAllEmployeeUseCaseFactory,
  deps: [EmployeeRepository]
};

const GetEmployeeByIdUseCaseFactory = (employeeRepo: EmployeeRepository) =>
  new GetEmployeeByIdUseCase(employeeRepo);
export const GetEmployeeByIdUseCaseProvider = {
  provide: GetEmployeeByIdUseCase,
  useFactory: GetEmployeeByIdUseCaseFactory,
  deps: [EmployeeRepository]
};



@NgModule({
    providers: [
          CreateEmployeeCaseProvider,
          UpdateUseCaseProvider,
          GetAllEmployeeUseCaseProvider,
          GetEmployeeByIdUseCaseProvider,
          GetAllAreasUseCaseProvider,
          GetAllSubAreaUseCaseProvider,
          
        { 
          provide: EmployeeRepository,
          useClass: EmployeeImplementationRepository},
],
  imports: [
    CommonModule,HttpClientModule
  ]
})
export class EmployeeModule { }
