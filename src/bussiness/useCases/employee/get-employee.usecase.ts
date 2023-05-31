import { Observable } from "rxjs";
import { UseCase } from "src/base/utils/IUseCase";
import { EmployeeRepository } from "src/bussiness/repositories/employee/employee.repository";
import { EmployeeModel } from "src/domain/models/employee/employee.model";

export class GetEmployeeByIdUseCase implements UseCase<number, EmployeeModel>{

    constructor(private repository: EmployeeRepository){}

    execute(idEmployee: number): Observable<EmployeeModel> {
        return this.repository.getEmployeeByIdAsync(idEmployee);
    }

}