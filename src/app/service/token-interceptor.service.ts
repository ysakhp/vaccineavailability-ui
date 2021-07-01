import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let userService = this.injector.get(UserService)
    let tokenizedReq = req
    // console.log("Request sending " + req.url)
    // if (req.url.indexOf('/authentication') === 0) {
if(userService.getToken() != null){
      // console.log("Token "+userService.getToken())
      tokenizedReq = req.clone({


        setHeaders: {
          
          Authorization: `Bearer ${userService.getToken()}`
        }

      })
     }
    // console.log("Tokenized req "+ tokenizedReq.headers.get("Authorization"))
    return next.handle(tokenizedReq)

  }


}



