import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Catalogue } from '../models/catalogue';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  private _url = "http://127.0.0.1:8000/api/catalogues/1";

  constructor(private _httpClient: HttpClient) { }

  getCatalogue(): Observable<Catalogue> {
    return this._httpClient.get<any>(this._url).pipe(
      map(res => {
        let catalogue: Catalogue = {
          burgers: res["burgers"],
          menus: res["menus"],
        }
        return catalogue;
      }),
    );
  }
}