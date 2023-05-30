import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EmployeeRepository } from "src/bussiness/repositories/employee/employee.repository";
import { CreateEmployeeCommand } from "src/domain/commands/employee/newEmployeeCommands";
import { EmployeeModel } from "src/domain/models/employee/employee.model";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root',
})

export class EmployeeImplementationRepository extends EmployeeRepository {

    constructor(private http: HttpClient ){
        super();
    }

    createEmployeeAsync(employee: CreateEmployeeCommand): Observable<string> {
        return this.http.post<string>(`${environment.urlApiEmployee}InsertNewEmployee`, employee);
    }
    updateEmployeeAsync(params: { idEmployee: number; employee: CreateEmployeeCommand; }): Observable<string> {
        return this.http.put<string>(`${environment.urlApiEmployee}UpdateEmployee?idEmployee=${params.idEmployee}`, params.employee);
    }
    getAllEmployeesAsync(): Observable<EmployeeModel[]> {
        return this.http.get<EmployeeModel[]>(`${environment.urlApiEmployee}GetAllEmployees
        `);
    }
    getEmployeeByIdAsync(idEmployee: number): Observable<EmployeeModel> {
        return this.http.get<EmployeeModel>(`${environment.urlApiEmployee}Employees/${idEmployee}`);
    }
}