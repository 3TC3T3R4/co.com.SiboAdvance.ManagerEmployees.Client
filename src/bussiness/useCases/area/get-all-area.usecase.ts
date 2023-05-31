import { Observable } from "rxjs";
import { UseCase } from "src/base/utils/IUseCase";
import { AreaRepository } from "src/bussiness/repositories/area/area.repository";
import { AreaModel } from "src/domain/models/area/area.model";

export class GetAllAreasUseCase implements UseCase<void, AreaModel[]>{

    constructor(private repository: AreaRepository){}

    execute(): Observable<AreaModel[]> {
        return this.repository.getAllAreasAsync();
    }

}