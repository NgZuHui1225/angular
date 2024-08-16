import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

import { DataService } from './http.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  private apiBaseUrl = 'https://api.staging.icares.app/utility';
  
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
      const token =  localStorage.getItem("currentUser") && localStorage.getItem("currentUser")!=null ? localStorage.getItem("currentUser") :'';
      req = req.clone({
      headers: req.headers.set(
          "x-access-token",
          token||''
      ),
      url: this.apiBaseUrl + req.url
      });
   
    return next.handle(req);
  }
}