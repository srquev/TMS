import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { TMSService } from './tms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnChanges{
  title = 'my-app';
  compName = '';
  public jsTasks = [
    {name:'Why you chose Angular, and the benefits Angular provides.?', isCompleted: false},
    {name:'Routing, Array Methods, Problem Solving, Promise, Observable, Subject, Behavor Subjet', isCompleted: false},
    {name:'What are pipes?', isCompleted: true},
    {name:'Interceptors, Directives, Route Guard, Lazyload', isCompleted: true},
    {name:'Angular Unit Testing', isCompleted: false},
    {name:'Angular Application Execution, Architecture, Dependencies, Supporting Files, Build', isCompleted: false},
    {name:'Reactive Froms', isCompleted: false},
    {name:'Javascript Programs, CSS: Positions, Flex-box, Grid, Responsiveness', isCompleted: false},
    {name:'DOM APIS', isCompleted: false},
    {name:'What is unit testing, and why is it important?', isCompleted: false},
    {name:'What is the primary purpose of integration testing?', isCompleted: true},
    {name:'What is E2E testing, and why do we need it?', isCompleted: false},
    {name:'What is the difference between debugging in the browser and in IDE?', isCompleted: false},
    {name:'string = findMaxChar(\'dddbsjakeldpgd\')?', isCompleted: false},
    {name:'How do you declare a service in Angular?', isCompleted: false},
    {name:'Did you ever use state management libraries?', isCompleted: false},
    {name:'Explain how change detection functions in Angular.', isCompleted: false},
  ]

  public tscTasks = [
    {name:'What is a class in programming? Can you give an example?', isCompleted: false},
    {name:'What is a object in programming? Can you give an example?', isCompleted: false},
    {name:'What is the benefit of interfaces?', isCompleted: false},
    {name:'What is inheritance in OOP?', isCompleted: false},
    {name:'What is meant by polymorphism in OOP?', isCompleted: false},
    {name:'Why is encapsulation important in programming?', isCompleted: false},
    {name:'Why do we use abstraction in programming?', isCompleted: false},
    {name:'What is the difference between a function and a constructor?', isCompleted: true},
    {name:'What is the difference between prototype inheritance and classical inheritance?', isCompleted: false}
  ]
  

  constructor(private tms:TMSService){console.log('constructor')}

  ngOnInit(){
    console.log('ngOnInit')
    this.sendTasks()
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit')
  }

  ngOnChanges(){
    console.log('ngOnChanges')
  }

  test1(){
    const data = [{
      name: 'bTreeSoft', id:9090, employed:true
    }]
    this.compName = data[0].name;
  }

  sendTasks(){
    this.tms.getTasks({jsTasks: this.jsTasks, tscTasks: this.tscTasks})
  }

}
