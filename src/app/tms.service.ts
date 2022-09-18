import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {ITMSEmployeeData, IEmployee} from './interface/employee.interface'

@Injectable({
  providedIn: 'root'
})
export class TMSService {
  
  constructor(private http: HttpClient) { }

getAllEmployees(): Observable<ITMSEmployeeData> {
  return this.http.get<ITMSEmployeeData>('https://my-json-server.typicode.com/srquev/TMS/db');
}

getAllEmployeeNames(): Observable<IEmployee> {
  return this.http.get<IEmployee>('https://my-json-server.typicode.com/srquev/user-data/db');
}
}
