import { Observable } from "rxjs";
import { AreaModel } from "src/domain/models/area/area.model";

export abstract class AreaRepository {
  
    abstract getAllAreasAsync(): Observable<AreaModel[]>;
    
}