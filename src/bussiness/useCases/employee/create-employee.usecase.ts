import { UseCase } from 'src/base/utils/IUseCase';
import { CreateEmployeeCommand } from '../../../domain/commands/employee/newEmployeeCommands';
import { EmployeeRepository } from '../../repositories/employee/employee.repository';
import { Observable } from 'rxjs';
import { EmployeeModel } from 'src/domain/models/employee/employee.model';
export class CreateEmployeeUseCase implements UseCase<CreateEmployeeCommand, string> {
    constructor(private employeeRepository: EmployeeRepository) {}

    execute(command: CreateEmployeeCommand): Observable<string> {
    
        return this.employeeRepository.createEmployeeAsync(command);
    
    }

}