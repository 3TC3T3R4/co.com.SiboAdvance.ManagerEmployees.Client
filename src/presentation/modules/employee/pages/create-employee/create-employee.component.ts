import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GetAllAreasUseCase } from 'src/bussiness/useCases/area/get-all-area.usecase';
import { GetAreaByIdUseCase } from 'src/bussiness/useCases/area/get-area-byid.usecase';
import { CreateEmployeeUseCase } from 'src/bussiness/useCases/employee/create-employee.usecase';
import { GetAllSubAreaByIdAreaUseCase } from 'src/bussiness/useCases/subarea/get-all-subarea-byidarea.usecase';
import { AreaModule } from 'src/data/repositories/area/area.module';
import { AreaModel } from 'src/domain/models/area/area.model';
import { SubAreaModel } from 'src/domain/models/subarea/subarea.model';

@Component({
  selector: 'sibo-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent {


  routeMainEmployee: string[];
  routeMainEmployee2: string[];
  frmFormReactive : FormGroup;
  routergoBackMenu: string[];
  areaslist: AreaModel[] = [];
  subAreasList: SubAreaModel[] = [];
  constructor(private getAllSubAreasByIdArea: GetAllSubAreaByIdAreaUseCase, private getAreaById: GetAreaByIdUseCase,private getAllAreas: GetAllAreasUseCase ,private createEmployeeUseCase: CreateEmployeeUseCase, private router: Router,private toastr: ToastrService) {

    this.routeMainEmployee = ['../../../'];
    this.routeMainEmployee2 = ['../../'];
    this.routergoBackMenu = ['dashboard'];
    this.frmFormReactive = new FormGroup({
        subArea_id: new FormControl(),
        typeDocument: new FormControl('', [Validators.required]),
        number_ID: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required])
    });
    

  }

  ngOnInit(): void {
    this.loadAllAreas();
}

  loadAllAreas(){
    let subGetAreas = this.getAllAreas.execute().subscribe({
      next: (data) => {
        this.areaslist = data;
        console.log(this.areaslist);
      },
      error: (error) => {
      },
      complete: () => {
       // subGetAreas.unsubscribe();
      },
    });

  }

  AreaChoose(areaModel: any){
    let selectedValue = (areaModel.target as HTMLSelectElement).value;
    let area_id = parseInt(selectedValue);
    
     this.getAllSubAreasByIdArea.execute(area_id).subscribe({
      next: (data) => {
        this.subAreasList = data;
        console.log(this.subAreasList);
      }
    });
    
  }


  SubAreaChoose(areaModel: any){
    let selectedValue = (areaModel.target as HTMLSelectElement).value;
    let Subarea_id = parseInt(selectedValue);
     this.frmFormReactive.patchValue({
      subArea_id: Subarea_id
     });
     //alert(this.frmFormReactive.getRawValue().subArea_id);
  }

  sendData() {
    
    console.log(this.frmFormReactive.getRawValue());
    this.createEmployeeUseCase.execute(
      this.frmFormReactive.getRawValue()
   ).subscribe(
      (data) => {
        this.toastr.success('Employee created successfully.', '', {
          timeOut: 3500,
          positionClass: 'toast-bottom-right',
        });
        this.router.navigate(this.routergoBackMenu);
      },
      (error) => {
        this.toastr.error('Employee was no create.', '', {
          timeOut: 3500,
          positionClass: 'toast-bottom-right',
        });
        this.router.navigate(this.routergoBackMenu);
      }


    );
    
  }
}
