import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GetAllAreasUseCase } from 'src/bussiness/useCases/area/get-all-area.usecase';
import { CreateEmployeeUseCase } from 'src/bussiness/useCases/employee/create-employee.usecase';
import { GetAllSubAreaUseCase } from 'src/bussiness/useCases/subarea/get-all-subarea-byidarea.usecase';
import { AreaModel } from 'src/domain/models/area/area.model';
import { SubAreaModel } from 'src/domain/models/subarea/subarea.model';

@Component({
  selector: 'sibo-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent  {
  
  frmFormReactive : FormGroup;
  routergoBackMenu: string[];
  areaslist: AreaModel[] = [];
  subareas: SubAreaModel[] = [];
  selectedArea: any;

  constructor(private gettAllSubAreas:GetAllSubAreaUseCase ,private getAllAreas: GetAllAreasUseCase ,private createEmployeeUseCase: CreateEmployeeUseCase, private router: Router,private toastr: ToastrService) {

    this.routergoBackMenu = ['dashboard'];
    this.frmFormReactive = new FormGroup({
        subArea_id: new FormControl('', [Validators.required]),
        typeDocument: new FormControl('', [Validators.required]),
        number_ID: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        
    });
    

  }

  // ngOnInit(): void {
  //   this.loadAreas();
  // }

  // loadAreas(){
  //   let subGetAreas = this.getAllAreas.execute().subscribe({
  //     next: (data) => {
  //       this.areaslist = data;
  //       console.log(this.areaslist);
  //     },
  //     error: (error) => {
  //     },
  //     complete: () => {
  //       subGetAreas.unsubscribe();
  //     },
  //   });

  // }

  onAreaChange(areaId: number) {
    if (areaId) {
      this.loadSubareas(areaId);
    } else {
      this.subareas = []; // Si no se selecciona un área, vaciar las subáreas
    }
  }
  
  loadSubareas(areaId: number) {
    let subGetSubareas = this.gettAllSubAreas.execute(areaId).subscribe({
      next: (data) => {
        this.subareas = data;
        console.log(this.subareas);
      },
      error: (error) => {
      },
      complete: () => {
        subGetSubareas.unsubscribe();
      },
    });
  }
  



  sendData() {
    this.createEmployeeUseCase.execute(
      this.frmFormReactive.getRawValue()
   ).subscribe(
      (data) => {
        this.toastr.success('Employee created successfully.', '', {
          timeOut: 3500,
          positionClass: 'toast-bottom-right',
        });

      },
      (error) => {
        this.toastr.success('Employee created successfully.', '', {
          timeOut: 3500,
          positionClass: 'toast-bottom-right',
        });
        this.router.navigate(this.routergoBackMenu);
      }


    );
    
  }
}
