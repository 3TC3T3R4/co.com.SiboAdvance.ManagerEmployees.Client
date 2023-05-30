import { Observable } from "rxjs";
import { CreateUserCommand } from "src/domain/commands/user/newUserCommands";

export abstract class UserRepository {
    abstract createUserAsync(newUserCommand: CreateUserCommand): Observable<CreateUserCommand>;
  
    
}