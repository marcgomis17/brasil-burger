import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsProduitService {
  private _url: string = "http://127.0.0.1:8000/api/details/";

  constructor(private _httpClient: HttpClient) { }

  getDetails(id: number): Observable<any> {
    return this._httpClient.get<any>(`${this._url}${id}`)
  }
}