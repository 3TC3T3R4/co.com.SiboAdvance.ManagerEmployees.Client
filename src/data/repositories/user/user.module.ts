import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRepository } from 'src/bussiness/repositories/user/user.repository';
import { CreateUserUseCase } from 'src/bussiness/useCases/user/create-user.usecase';
import { UserImplementationRepository } from './user-implementation-repository';
import { HttpClientModule } from '@angular/common/http';

const CreateUserUseCaseFactory = (userRepo: UserRepository) => new CreateUserUseCase(userRepo);
export const CreateUserUseCaseProvider = {
  provide: CreateUserUseCase,
  useFactory: CreateUserUseCaseFactory,
  deps: [UserRepository]
};

@NgModule({
  providers: [
    CreateUserUseCaseProvider,
    {
      provide: UserRepository,
      useClass: UserImplementationRepository
    }
  ],
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class UserModule { }
