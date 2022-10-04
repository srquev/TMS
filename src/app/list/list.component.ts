import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ITest } from 'src/app/interface/employee.interface';

@Component({
  selector: 'app-list-popup',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListPopupComponent implements OnInit, OnChanges {
  @Input() showPopup : any;
  @Input() currentEmployeeData : any;
  @Output() popupState = new EventEmitter<boolean>();
  @Input() objTest : ITest


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:any){
    console.log(changes)
  }

  actionBtn(actionType: string){
    this.showPopup = false;
    this.popupState.emit(false)
  }

}

