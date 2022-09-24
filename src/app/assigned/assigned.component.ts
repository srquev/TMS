import { Component, OnInit } from '@angular/core';
import { TMSService } from '../tms.service';

@Component({
  selector: 'app-assigned',
  templateUrl: './assigned.component.html',
  styleUrls: ['./assigned.component.scss']
})


export class AssignedComponent implements OnInit {
  public getData: any;
  constructor(private tms: TMSService) { }

  ngOnInit(): void {
    this.tms.tasks$.subscribe(
    {
      next: data =>  this.getData = data,
      error: err => console.log(err),
      complete: ()=> console.log('done')
    }     // nextHandler
    )
  }
  

  updateQuestion(){
    this.getData.javaScriptTask.push({name:'RegEx and string manipulations', isCompleted: false})
  }

}
