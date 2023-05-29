import { Observable } from "rxjs";
import { CreateEmployeeCommand } from "src/domain/commands/employee/newEmployeeCommands";
import { EmployeeModel } from "src/domain/models/employee/employee.model";

export abstract class EmployeeRepository {
  
  
abstract createEmployeeAsync(
    newEmployeeCommand: CreateEmployeeCommand): Observable<string>;

abstract getAllEmployeesAsync(): Observable<EmployeeModel[]>;

abstract updateEmployeeAsync(params: { idEmployee: number, employee: CreateEmployeeCommand}): Observable<string>;

abstract getEmployeeByIdAsync(employeeID: number): Observable<EmployeeModel>;



}

