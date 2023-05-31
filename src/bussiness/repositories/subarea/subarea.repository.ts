import { Observable } from "rxjs";
import { SubAreaModel } from "src/domain/models/subarea/subarea.model";

export abstract class SubAreaRepository {
  
  
   
    
    abstract getAllSubAreasByIdAreaAsync(areaID: number): Observable<SubAreaModel[]>;
    
    
    
    }