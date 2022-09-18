import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { TMSService } from '../tms.service';
// import { forkJoin } from 'rxjs/observable/forkJoin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public showPopup = false;
  public employeeaTask : any;
  public showLoader = false;
  public employeeNames :any;
  public displayForm = false;
  public currentEmployeeData: any;
  // public formHeight: any = 0;
  constructor(private tmsService : TMSService) { }

  ngOnInit(): void {
    this.getDataSource();
  }

  getDataSource(){
    this.showLoader = true;
    // forkJoin : if you want to take action when a response has been received for all.
    forkJoin([this.tmsService.getAllEmployees(), this.tmsService.getAllEmployeeNames()]).subscribe((response:any)=>{
      this.employeeaTask = response[0].data;
      this.employeeNames = response[1].employee;
      console.log(response,'response');
      this.showLoader = false;
    })
  }

  viewEdit(empObject:any, actionType:string){
    console.log(empObject);
    const selectedEmployee = this.employeeaTask?.filter((_item:any)=> _item.id ===  empObject?.id && _item.name ===  empObject?.name);
    this.currentEmployeeData = selectedEmployee[0];
    this.showPopup = true;
  }
  
  popupState(event: boolean){ this.showPopup = event;}

  sortAZ(keyName: any){
    this.employeeNames = this.employeeNames.sort(function(a:any, b:any){
      if(a[keyName] < b[keyName]) { return -1; }
      if(a[keyName] > b[keyName]) { return 1; }
      return 0;
  })
  }

  // show form

  showForm(){
    this.displayForm = !this.displayForm;
    // setTimeout(()=>{
    //   if(this.displayForm){
    //     const getFormElement = document.getElementsByClassName('form')[0];
    //   const getTableContainer = Array.from(document.getElementsByClassName('table-container') as HTMLCollectionOf<HTMLElement>)
    //   // const getTableContainer = document.getElementsByClassName('table-container')[0];
    //   this.formHeight = getFormElement.clientHeight;
    //   this.formHeight = this.formHeight + 2 + 10;
    //   // getTableContainer[0].style.maxHeight = '300px'
    //   console.log(this.formHeight, getTableContainer, getTableContainer[0].style.maxHeight)
    //   }
    // })

  }

}
