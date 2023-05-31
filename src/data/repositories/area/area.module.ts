import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaRepository } from 'src/bussiness/repositories/area/area.repository';
import { GetAllAreasUseCase } from 'src/bussiness/useCases/area/get-all-area.usecase';
import { AreaImplementationRepository } from './area-implementation.repository';

const GetAllAreasUseCaseFactory = (areaRepo: AreaRepository) =>
  new GetAllAreasUseCase(areaRepo);
export const GetAllAreasUseCaseProvider = {
  provide: GetAllAreasUseCase,
  useFactory: GetAllAreasUseCaseFactory,
  deps: [AreaRepository]
};


@NgModule({
  declarations: [],
  providers: [
    GetAllAreasUseCaseProvider,
    { 
      provide: AreaRepository,
      useClass: AreaImplementationRepository}
  ],
  imports: [
    CommonModule
  ]
})
export class AreaModule { }
