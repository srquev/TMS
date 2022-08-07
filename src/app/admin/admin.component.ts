import { Component, OnInit } from '@angular/core';
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
  constructor(private tmsService : TMSService) { }

  ngOnInit(): void {
    this.tmsService.getAllEmployees().subscribe((data)=>{
      this.employeeData =  data;
      const cuurentEmployeeObj = this.employeeData?.data.filter((item:any)=> item?.id === 2)
      this.currentEmployeeData = cuurentEmployeeObj[0]?.task;
      console.log(this.employeeData)
      console.log(data,'night 356')
    })
  }

  viewEdit(actionType:string){
    console.log(actionType);
    this.showPopup = true;
  }

}
