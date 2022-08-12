import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/client/shared/models/user';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _loginUrl: string = baseUrl + "login_check";
  private _clientRegisterUrl: string = baseUrl + "/clients";
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private _http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.user = this.userSubject.asObservable();
  }

  login(email: string, password: string): Observable<any> {
    let body = { username: email, password: password };
    return this._http.post<any>(
      this._loginUrl,
      body
    );
  }

  register(data: any): Observable<any> {
    return this._http.post<any>(
      this._clientRegisterUrl,
      data
    );
  }
}
