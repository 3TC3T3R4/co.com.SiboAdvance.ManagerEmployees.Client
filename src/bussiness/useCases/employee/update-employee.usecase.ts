import { Observable } from "rxjs";
import { UseCase } from "src/base/utils/IUseCase";
import { EmployeeRepository } from "src/bussiness/repositories/employee/employee.repository";
import { CreateEmployeeCommand } from "src/domain/commands/employee/newEmployeeCommands";

export class UpdateEmployeeUseCase implements UseCase<{idEmployee: number, employee : CreateEmployeeCommand}, string>{

    constructor(private repository: EmployeeRepository){}

    execute(params : {idEmployee : number, employee : CreateEmployeeCommand }): Observable<string> {
        return this.repository.updateEmployeeAsync(params);
    }

}