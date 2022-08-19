import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  private _livraisonUrl: string = `${baseUrl}livraisons`;
  private _livreursUrl: string = `${baseUrl}livreurs`

  constructor(private _http: HttpClient) { }

  getDeliverers(): Observable<any> {
    return this._http.get(this._livreursUrl);
  }

  sendDelivery(livraison: any): Observable<any> {
    return this._http.post<any>(this._livraisonUrl, livraison);
  }
}
