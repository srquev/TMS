import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigned',
  templateUrl: './assigned.component.html',
  styleUrls: ['./assigned.component.scss']
})







export class AssignedComponent implements OnInit {
  public tasks = [
    {name:'Why you chose Angular, and the benefits Angular provides.?', isCompleted: false},
    {name:'Routing', isCompleted: false},
    {name:'Interceptors', isCompleted: false},
    {name:'Angular Unit Testing', isCompleted: false},
    {name:'Reactive Froms', isCompleted: false},
    {name:'Javascript Programs', isCompleted: false},
    {name:'DOM APIS', isCompleted: false},
    {name:'Which software is used for manual testing?', isCompleted: false},
    {name:'What is unit testing, and why is it important?', isCompleted: false},
    {name:'What is the primary purpose of integration testing?', isCompleted: false},
    {name:'What is E2E testing, and why do we need it?', isCompleted: false},
    {name:'What is the difference between debugging in the browser and in IDE?', isCompleted: false},
    {name:'string = findMaxChar(\'dddbsjakeldpgd\')?', isCompleted: false},
    {name:'Q: How do you declare a service in Angular?', isCompleted: false},
    {name:'Q: Did you ever use state management libraries?', isCompleted: false},
    {name:'Q: Explain how change detection functions in Angular.', isCompleted: false},
    {name:'Q: What are pipes?', isCompleted: false},
    {name:'RegEx and string manipulations', isCompleted: false},
    
  ]

  public typeScripttasks = [
    {name:'What is a class in programming? Can you give an example?', isCompleted: false},
    {name:'What is a object in programming? Can you give an example?', isCompleted: false},
    {name:'What is the benefit of interfaces?', isCompleted: false},
    {name:'What is inheritance in OOP?', isCompleted: false},
    {name:'What is meant by polymorphism in OOP?', isCompleted: false},
    {name:'Why is encapsulation important in programming?', isCompleted: false},
    {name:'Why do we use abstraction in programming?', isCompleted: false},
    {name:'What is the difference between a function and a constructor?', isCompleted: false},
    {name:'What is the difference between prototype inheritance and classical inheritance?', isCompleted: false}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
