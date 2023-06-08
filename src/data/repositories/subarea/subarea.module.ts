import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubAreaRepository } from 'src/bussiness/repositories/subarea/subarea.repository';
import { GetAllSubAreaByIdAreaUseCase } from 'src/bussiness/useCases/subarea/get-all-subarea-byidarea.usecase';
import { SubAreaImplementationRepository } from './subarea-implementation.repository';
import { HttpClientModule } from '@angular/common/http';
import { GetAllSubAreaUseCase } from 'src/bussiness/useCases/subarea/get-all-subarea.usecase';
import { GetSubAreaByIdUseCase } from 'src/bussiness/useCases/subarea/get-subarea-byid.usecase';

const GetAllSubAreaByIdAreaUseCaseFactory = (subAreaRepo: SubAreaRepository) =>
  new GetAllSubAreaByIdAreaUseCase(subAreaRepo);
export const GetAllSubAreaByIdAreaUseCaseProvider = {
  provide: GetAllSubAreaByIdAreaUseCase,
  useFactory: GetAllSubAreaByIdAreaUseCaseFactory,
  deps: [SubAreaRepository]
};


const GetAllSubAreaUseCaseFactory = (subAreaRepo: SubAreaRepository) =>
  new GetAllSubAreaUseCase(subAreaRepo); 
export const GetAllSubAreaUseCaseProvider = {
  provide: GetAllSubAreaUseCase,
  useFactory: GetAllSubAreaUseCaseFactory,
  deps: [SubAreaRepository]
};

const GetSubAreaByIdUseCaseFactory = (subAreaRepo: SubAreaRepository) =>
  new GetSubAreaByIdUseCase(subAreaRepo);
export const GetSubAreaByIdUseCaseProvider = {
  provide: GetSubAreaByIdUseCase,
  useFactory: GetSubAreaByIdUseCaseFactory,
  deps: [SubAreaRepository]
};


@NgModule({
  declarations: [],
  providers: [
    GetAllSubAreaByIdAreaUseCaseProvider,
    GetAllSubAreaUseCaseProvider,
    GetSubAreaByIdUseCaseProvider,

    { 
      provide: SubAreaRepository,
      useClass: SubAreaImplementationRepository}
  ],
  imports: [
    CommonModule,HttpClientModule
  ]
})
export class SubareaModule { }
