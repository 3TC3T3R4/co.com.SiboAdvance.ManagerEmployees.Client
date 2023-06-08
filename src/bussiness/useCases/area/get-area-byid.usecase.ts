import { Observable } from "rxjs";
import { UseCase } from "src/base/utils/IUseCase";
import { AreaRepository } from "src/bussiness/repositories/area/area.repository";
import { AreaModel } from "src/domain/models/area/area.model";

export class GetAreaByIdUseCase implements UseCase<number, AreaModel>{

    constructor(private repository: AreaRepository){}

    execute(idArea: number): Observable<AreaModel> {
        return this.repository.getAreaByIdAsync(idArea);
    }

}