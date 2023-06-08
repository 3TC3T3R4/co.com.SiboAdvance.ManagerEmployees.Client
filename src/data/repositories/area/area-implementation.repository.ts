import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AreaRepository } from "src/bussiness/repositories/area/area.repository";
import { EmployeeRepository } from "src/bussiness/repositories/employee/employee.repository";
import { CreateEmployeeCommand } from "src/domain/commands/employee/newEmployeeCommands";
import { AreaModel } from "src/domain/models/area/area.model";
import { EmployeeModel } from "src/domain/models/employee/employee.model";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root',
})

export class AreaImplementationRepository extends AreaRepository {
    
    constructor(private http: HttpClient ){
        super();
    }

    
    getAllAreasAsync(): Observable<AreaModel[]> {
        return this.http.get<AreaModel[]>(`${environment.urlApiAreas}GetAllAreas
        `);
    }

    getAreaByIdAsync(id: number): Observable<AreaModel> {
        return this.http.get<AreaModel>(`${environment.urlApiAreas}${id}`);
    }
    
}