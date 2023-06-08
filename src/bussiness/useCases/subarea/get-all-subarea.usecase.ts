import { Observable } from "rxjs";
import { UseCase } from "src/base/utils/IUseCase";
import { SubAreaRepository } from "src/bussiness/repositories/subarea/subarea.repository";
import { SubAreaModel } from "src/domain/models/subarea/subarea.model";

export class GetAllSubAreaUseCase implements UseCase<void, SubAreaModel[]>{

    constructor(private repository: SubAreaRepository){}

    execute(): Observable<SubAreaModel[]> {
        return this.repository.getAllSubAreasAsync();
    }

}