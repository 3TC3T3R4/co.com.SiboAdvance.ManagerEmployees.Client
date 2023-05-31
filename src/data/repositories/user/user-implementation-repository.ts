import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserRepository } from "src/bussiness/repositories/user/user.repository";
import { CreateUserCommand } from "src/domain/commands/user/newUserCommands";

import { UserModel } from "src/domain/models/user/user.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
  constructor(private http: HttpClient) {
    super();
  }

  createUserAsync(newUserCommand: CreateUserCommand): Observable<CreateUserCommand> {
    return this.http.post<CreateUserCommand>(`${environment.urlApiUsers}`,
      newUserCommand
    );
  }
  
}