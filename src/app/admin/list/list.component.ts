import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
  @Input() showPopup : any;
  @Input() employeeData : any;
  @Input() currentEmployeeData : any;
  @Output() popupState = new EventEmitter<boolean>();

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
