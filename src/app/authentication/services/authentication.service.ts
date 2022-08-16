import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _loginUrl: string = `${baseUrl}login_check`;
  private _clientRegisterUrl: string = `${baseUrl}clients`;
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
    ).pipe(
      map(res => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          this.saveUser(res.token);
        }
      })
    )
  }

  register(data: any): Observable<any> {
    return this._http.post<any>(
      this._clientRegisterUrl,
      data
    );
  }

  saveUser(token: any) {
    let payload = token.split('.')[1];
    let userData = JSON.parse(atob(payload));
    let user: User = {
      prenom: userData.user.prenom,
      nom: userData.user.nom,
      email: userData.username,
      roles: userData.roles
    }
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
