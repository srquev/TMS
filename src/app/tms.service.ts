import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {ITMSEmployeeData, IEmployee, IGloss} from './interface/employee.interface'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TMSService {
  private url = './assets/data/tms-local-data.json'
  // public tasks$ = new Subject();
  public tasks$ = new BehaviorSubject({javaScriptTask: null, typeScriptTasks: null})
  // public headers = new Headers({ 'Content-Type': 'application/json' });
  
  constructor(private http: HttpClient) { 
  }

getAllEmployees(): Observable<ITMSEmployeeData> {
  return this.http.get<ITMSEmployeeData>('https://my-json-server.typicode.com/srquev/TMS/db');
}

getAllEmployeeNames(): Observable<IEmployee> {
  return this.http.get<IEmployee>('https://my-json-server.typicode.com/srquev/user-data/db');
}

getLocalJSON(): Observable<IGloss> {
  let headers = new HttpHeaders({
  'Content-Type':'TMS/json; charset=utf-8',
  'Authorization': 'XXXXXXXXXXXXXXXXXXXXXXXX',
  'tokens': 'token token token'
});
  headers = headers.set('h1', 'v1').set('h2','v2')
  headers = headers.set('h8', 'v8')
  return this.http.get<IGloss>(this.url, {headers: headers});
}

// custom headers

/*

let headers = new HttpHeaders();
headers.append('X-fastgate-resource', 'Example');
let options = { headers: headers };
let apiUrl: string = 'http://url';
this.http.get(apiUrl, options);

*/

getTasks(data:any){
  this.tasks$.next({javaScriptTask: data.jsTasks, typeScriptTasks: data.tscTasks})
}

}
