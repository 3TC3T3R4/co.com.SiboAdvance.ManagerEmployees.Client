import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaRepository } from 'src/bussiness/repositories/area/area.repository';
import { GetAllAreasUseCase } from 'src/bussiness/useCases/area/get-all-area.usecase';
import { AreaImplementationRepository } from './area-implementation.repository';
import { GetAreaByIdUseCase } from 'src/bussiness/useCases/area/get-area-byid.usecase';

const GetAllAreasUseCaseFactory = (areaRepo: AreaRepository) =>
  new GetAllAreasUseCase(areaRepo);
export const GetAllAreasUseCaseProvider = {
  provide: GetAllAreasUseCase,
  useFactory: GetAllAreasUseCaseFactory,
  deps: [AreaRepository]
};


const GetAreaByIdUseCaseFactory = (areaRepo: AreaRepository) =>
  new GetAreaByIdUseCase(areaRepo);
export const GetAreaByIdUseCaseProvider = {
  provide: GetAreaByIdUseCase,
  useFactory: GetAreaByIdUseCaseFactory,
  deps: [AreaRepository]
};


@NgModule({
  declarations: [],
  providers: [
    GetAllAreasUseCaseProvider,
    GetAreaByIdUseCaseProvider,
    { 
      provide: AreaRepository,
      useClass: AreaImplementationRepository}
  ],
  imports: [
    CommonModule
  ]
})
export class AreaModule { }
