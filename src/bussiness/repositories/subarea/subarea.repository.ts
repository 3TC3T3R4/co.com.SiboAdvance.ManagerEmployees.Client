import { Observable } from "rxjs";
import { SubAreaModel } from "src/domain/models/subarea/subarea.model";

export abstract class SubAreaRepository {
  
  
   
    
    abstract getAllSubAreasByIdAreaAsync(area_id: number): Observable<SubAreaModel[]>;
    
    
    
    }