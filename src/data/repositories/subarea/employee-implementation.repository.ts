import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EmployeeRepository } from "src/bussiness/repositories/employee/employee.repository";
import { SubAreaRepository } from "src/bussiness/repositories/subarea/subarea.repository";
import { CreateEmployeeCommand } from "src/domain/commands/employee/newEmployeeCommands";
import { EmployeeModel } from "src/domain/models/employee/employee.model";
import { SubAreaModel } from "src/domain/models/subarea/subarea.model";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root',
})

export class SubAreaImplementationRepository extends SubAreaRepository {
  
    constructor(private http: HttpClient ){
        super();
    }

    
    getAllSubAreasByIdAreaAsync(area_id: number): Observable<SubAreaModel[]> {
        return this.http.get<SubAreaModel[]>(`${environment.urlApiSubAreas}${area_id}`);
    }
}