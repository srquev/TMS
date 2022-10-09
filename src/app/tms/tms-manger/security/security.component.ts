import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecurityComponent {
  @Input() wagons: ICarData

  constructor(private cd: ChangeDetectorRef) { }

  ngOnChanges(){
    console.log(this.wagons,'app-security: ngOnChanges')
  }

  ngOnInit(): void {
    console.log(this.wagons,'app-security: ngOnInit');
  }


  /**
   * *A callback method that is invoked immediately after Angular has completed initialization of a component's view. 
   * *It is invoked only once when the view is instantiated.
   */
  ngAfterViewinit(){
    console.log(this.wagons,'app-security: ngAfterViewinit');
  }


   /** 
   * *ngDoCheck will always detect changes in its component and associated child components. 
   */
  ngDoCheck(){
    console.log(this.wagons,'app-security: ngDoCheck');
    // this.cd.markForCheck()
    // this.cd.detach();

    // setTimeout( ()=> this.cd.detach(),5000)
  }

}



/** 
 * ? Interfaces 
*/
export interface IWagons {
  color: string,
  type: string,
  registration: Date,
  capacity: number
}

export interface ICarData {
  data:IWagons[]
}


