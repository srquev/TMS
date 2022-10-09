import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmsResolverService implements Resolve<Observable<IData>> {

  constructor() { }

  resolve() : Observable<IData> {
    
    // return new Promise((resol, rejec)=>{
    //   setTimeout(()=>{
    //     const adminCreds = {access: 'admin_access', role: 'tenant'}
    //     resol(adminCreds)
    //     if(adminCreds.access === 'user'){
    //       rejec('you do not have admin level access')
    //     }
    //   },3000)
    // })


    return new Observable((observer: Subscriber<IData>)=>{
      setTimeout(()=>{
        const info = {msg:'this data is emitted from TmsResolverService after 3 sec when you clicked on employee tab', userId: 8919257903}
        if(info.userId === 8919257903){
          observer.next(info);
          observer.complete();
        }else {
          // handle error here
        }
      }, 3000)
    })
  }
}

export interface IData{
  msg: string;
  userId: number;
}
