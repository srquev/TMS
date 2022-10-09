import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {cloneDeep} from 'lodash'
 
@Component({
  selector: 'app-tms-manger',
  templateUrl: './tms-manger.component.html',
  styleUrls: ['./tms-manger.component.scss']
})
export class TmsMangerComponent implements OnInit, AfterViewInit {
  public animals = [
    {catId:111, name: 'dog'},
    {catId:222, name: 'cow'},
    {catId:333, name: 'tiger'},
    {catId:444, name: 'bull'},
  ]
  public cars = {
    data: [
      {
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2017-01-03'),
        "capacity": 7
      },
      {
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5
      }
    ]
  }

  constructor(private elRef: ElementRef,private route: ActivatedRoute, private _route:Router ) { }

  ngOnInit(): void {
    this.sampleFunction('Sharique_Jamal', 'UP, India');
    this.route.queryParams.subscribe(params => {
     console.log(this.route.url)
    });
    console.log(this._route.url)

    this.printFbSeries(10)
    this.sortWithoutSort([2,10,5,3,6,8,4,1])
  }

  ngAfterViewInit(){
    console.log('after view initialized')
  }


  updateCarProperty() {
    // const cloneddata = cloneDeep(this.cars);
    // this.cars = cloneddata;
    this.cars.data[0].color = 'cyan';
  }

  addAnimal(){
  this.animals = [
    {catId:111, name: 'dog'},
    {catId:222, name: 'cow'},
    {catId:333, name: 'tiger'},
    {catId:444, name: 'bull'},
    {catId:444, name: 'leopard'},
  ]
  }

  trackByfn(index:number, item:any){
    return item.catId
  }

  sampleFunction(name: string, location:string){
    console.log(arguments,'arg');
    // arguments[0]='Jamal'
    console.log( `I am ${arguments[0]} from ${arguments[1]}.`);
  }

  printFbSeries(number) {
    let n1=0; 
    let n2=1;
    let nextT;
    const fbArray = [];
    for(let i=1; i<number; i++){
      nextT = n1 + n2;
      n1 = n2;
      n2 = nextT;
      fbArray.push(n1)
    }
    console.log(fbArray)
  }



  /**
   * temp = a[0]   a[0]   a[1]  when i = 0;
   * temp = a[1]   a[1]   a[2]  when i = 1;
   * exp: when i =1;  temp = 10; a[i] = 5 a[j] = temp = 10; we're switching the element position 
   */

 sortWithoutSort(a: number[]){
  //2,10,5,3,6,8,4,1
  for(let i=0; i<a.length; i++){
    for(let j= i+1; j<a.length; j++){
      if(a[i] > a[j]){
        const temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  console.log(a)
  
 }
 

}



