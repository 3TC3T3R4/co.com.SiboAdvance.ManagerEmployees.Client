
import { CreateUserCommand } from 'src/domain/commands/user/newUserCommands';
import { UserRepository } from '../../repositories/user/user.repository';
import { Observable } from "rxjs";
import { UseCase } from 'src/base/utils/IUseCase';

export class CreateUserUseCase implements UseCase<CreateUserCommand, CreateUserCommand>{
  constructor(private userRepository: UserRepository) { }
  execute(command: CreateUserCommand): Observable<CreateUserCommand> {
    return this.userRepository.createUserAsync(command);
  }
}