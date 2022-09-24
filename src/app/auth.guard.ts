import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router){}
  canActivate(): boolean {
    const isAdmin = true;
    if(isAdmin){
      return true
    } else {
      this._router.navigate(['./employee'])
      return false;
    }
  }
  
}
