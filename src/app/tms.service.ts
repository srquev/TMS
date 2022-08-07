import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TMSService {

  constructor(private http: HttpClient) { }

getAllEmployees(): Observable<any> {
  return this.http.get<any>('https://my-json-server.typicode.com/srquev/TMS/db');
}
}
