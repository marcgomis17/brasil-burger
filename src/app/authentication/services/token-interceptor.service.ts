import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _auth: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this._auth.getToken() !== null) {
      let tokenReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this._auth.getToken()}`,
        }
      });
      return next.handle(tokenReq);
    }
    return next.handle(req);
  }
}
