import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptor implements HttpInterceptor{
    constructor(){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const idToken = 'eydasdfjioadfasfwsdfsdafwiorndfasyhdf3erawfjioadfasfwsdfsdafwiorndfasyhdf3erfjioadfasfwsdfsdafwiorndfasyhdf3er';
        if(idToken){
            const cloned = req.clone({
                headers:req.headers.set('Authorization', 'Bearer ' + idToken).set('customHeader','custom header')
            })
            return next.handle(cloned)
        }else{
            return next.handle(req)
        }
    }
}