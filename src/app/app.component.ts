import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-app';
   compName = ''
  constructor(){

  }

  ngOnInit(){
    
  }

  test1(){
    const data = [{
      name: 'bTreeSoft', id:9090, employed:true
    }]
    this.compName = data[0].name;
  }
}
