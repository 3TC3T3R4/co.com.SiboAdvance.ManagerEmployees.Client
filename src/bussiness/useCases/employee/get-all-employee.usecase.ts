import { Observable } from "rxjs";
import { UseCase } from "src/base/utils/IUseCase";
import { EmployeeRepository } from "src/bussiness/repositories/employee/employee.repository";
import { EmployeeModel } from "src/domain/models/employee/employee.model";

export class GetAllEmployeeUseCase implements UseCase<void, EmployeeModel[]>{

    constructor(private repository: EmployeeRepository){}

    execute(): Observable<EmployeeModel[]> {
        return this.repository.getAllEmployeeAsync();
    }

}