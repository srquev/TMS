import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../tms-interface';
import { TMSService } from '../tms.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public showPopup = false;
  public employeeData : any;
  public currentEmployeeData : any;
  public showLoader = false;
  public employeeNames :any;
  constructor(private tmsService : TMSService) { }

  ngOnInit(): void {
    this.showLoader = true;
   const observable1 =  this.tmsService.getAllEmployees().subscribe((data)=>{
      this.employeeData =  data;
      const cuurentEmployeeObj = this.employeeData?.data.filter((item:any)=> item?.id === 2)
      this.currentEmployeeData = cuurentEmployeeObj[0]?.task;
      this.showLoader = false;
    });


    const observable2 = this.tmsService.getAllEmployeeNames().subscribe((res:IEmployee)=>{
      this.employeeNames = res.employee;
      console.log(this.employeeNames,res.employee)
    })

    // merging two observables

    // Observable.for([observable1, observable2]).subscribe((result:any)=>{
    //   console.log(result,'both observables')
    // })
  }

  viewEdit(empObject:any, actionType:string){
    console.log(empObject)
    this.showPopup = true;
  }
  
  popupState(event: boolean){ this.showPopup = event;}

  sortAZ(){
    this.employeeNames = this.employeeNames.sort(function(a:any, b:any){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  })
  }

}
