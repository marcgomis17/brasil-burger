import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, timeout } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _loginUrl: string = `${baseUrl}login_check`;
  private _clientRegisterUrl: string = `${baseUrl}clients`;
  private userSubject: BehaviorSubject<User>;
  public user: User | undefined;

  constructor(private _http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
  }

  login(email: string, password: string): Observable<any> {
    let body = { username: email, password: password };
    return this._http.post<any>(
      this._loginUrl,
      body
    ).pipe(
      map(async (res) => {
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

  logout() {
    localStorage.clear();
  }

  saveUser(token: any) {
    let payload = token.split('.')[1];
    let userData = JSON.parse(atob(payload));
    this.user = {
      id: userData.user.id,
      prenom: userData.user.prenom,
      nom: userData.user.nom,
      email: userData.username,
      roles: userData.roles
    }
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isConnected() {
    return this.getToken() !== null;
  }
}
