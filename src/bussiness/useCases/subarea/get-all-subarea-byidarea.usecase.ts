import { Observable } from "rxjs";
import { UseCase } from "src/base/utils/IUseCase";
import { SubAreaRepository } from "src/bussiness/repositories/subarea/subarea.repository";
import { SubAreaModel } from "src/domain/models/subarea/subarea.model";

export class GetAllSubAreaUseCase implements UseCase<number, SubAreaModel[]>{

    constructor(private repository: SubAreaRepository){}

    execute(area_id: number): Observable<SubAreaModel[]> {
        return this.repository.getAllSubAreasByIdAreaAsync(area_id);
    }

}