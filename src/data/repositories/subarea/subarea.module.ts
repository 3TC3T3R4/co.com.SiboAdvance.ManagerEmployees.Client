import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubAreaRepository } from 'src/bussiness/repositories/subarea/subarea.repository';
import { GetAllSubAreaUseCase } from 'src/bussiness/useCases/subarea/get-all-subarea-byidarea.usecase';
import { SubAreaImplementationRepository } from './employee-implementation.repository';

const GetAllSubAreaUseCaseFactory = (subAreaRepo: SubAreaRepository) =>
  new GetAllSubAreaUseCase(subAreaRepo);
export const GetAllSubAreaUseCaseProvider = {
  provide: GetAllSubAreaUseCase,
  useFactory: GetAllSubAreaUseCaseFactory,
  deps: [SubAreaRepository]
};

@NgModule({
  declarations: [],
  providers: [
     GetAllSubAreaUseCaseProvider,
    { 
      provide: SubAreaRepository,
      useClass: SubAreaImplementationRepository}
  ],
  imports: [
    CommonModule
  ]
})
export class SubareaModule { }
