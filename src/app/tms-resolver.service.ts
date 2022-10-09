import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, PreloadAllModules, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

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


    return new Observable((observer)=>{
      setTimeout(()=>{
        const info = {msg:'this data is emitted from resolve service after 3 sec when you clicked on employee tab', userId: 8919257903}
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
