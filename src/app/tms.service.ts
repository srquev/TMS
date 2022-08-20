import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './tms-interface';

@Injectable({
  providedIn: 'root'
})
export class TMSService {
  
  constructor(private http: HttpClient) { }

getAllEmployees(): Observable<any> {
  return this.http.get<any>('https://my-json-server.typicode.com/srquev/TMS/db');
}

getAllEmployeeNames(): Observable<any> {
  return this.http.get<any>('https://my-json-server.typicode.com/srquev/user-data/db');
}
}
