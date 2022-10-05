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
  public employeeaTask: any;
  public showLoader = false;
  public employeeNames: any;
  public displayForm = false;
  public currentEmployeeData: any;


  constructor(private tmsService: TMSService) { }

  ngOnInit(): void {
    this.getDataSource();
    this.getLocalDataSource();
  }


   /*
    * forkJoin is an operator that takes any number of input observables which can be passed either as an array or a dictionary of input observables. 
    * If no input observables are provided (e.g. an empty array is passed), then the resulting stream will complete immediately.
    * forkJoin : if you want to take action when a response has been received for ALL.
    ! forkJoin will not emit more than once and it will complete after that.
    */
  getDataSource() {
    this.showLoader = true;
    forkJoin([this.tmsService.getAllEmployees(), this.tmsService.getAllEmployeeNames()]).subscribe((response: any) => {
      this.employeeaTask = response[0].data;
      this.employeeNames = response[1].employee;
      console.log(response, 'response');
      this.showLoader = false;
    })
  }

  /**
    @param empObject is clicked row's employee object
    @param actionType is the user's action i.e. View OR Edit
   */
  viewEdit(empObject: any, actionType: string) {
    console.log(empObject);
    const selectedEmployee = this.employeeaTask?.filter((_item: any) => _item.id === empObject?.id && _item.name === empObject?.name);
    this.currentEmployeeData = selectedEmployee[0];
    this.showPopup = true;
  }


  /** @param event will return true if the popup is open and vice versa. */
  popupState(event: boolean) { this.showPopup = event; }


/** @param keyName is an employee name */
  sortAZ(keyName: string) {
    this.employeeNames = this.employeeNames.sort(function (a: any, b: any) {
      if (a[keyName] < b[keyName]) { return -1; }
      if (a[keyName] > b[keyName]) { return 1; }
      return 0;
    })
  }

  

  /** this methods will show/hide the reactive forms */
  showForm() {
    this.displayForm = !this.displayForm;
  }

  getLocalDataSource() {
    this.tmsService.getLocalJSON().subscribe((data: any) => { console.log(data, '<-- Data') })
  }



}
