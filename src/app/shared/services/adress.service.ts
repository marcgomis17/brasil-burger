import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdressService {
  private _zoneUrl: string = `${baseUrl}zones`;

  constructor(private _http: HttpClient) { }

  getLocations(): Observable<any> {
    return this._http.get(this._zoneUrl);
  }
}
