import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProduitCommande } from 'src/app/shared/models/produitCommande';
import { baseUrl } from 'src/environments/environment';
import { Panier } from '../../client/shared/models/panier';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  panier: Panier = {};
  burgers: ProduitCommande[] = [];
  menus: ProduitCommande[] = [];
  boissons: ProduitCommande[] = [];
  frites: ProduitCommande[] = [];
  private _orderUrl: string = `${baseUrl}commandes`;

  constructor(private _http: HttpClient) { }

  makeCart(products: ProduitCommande[]) {
    products.forEach(produitCommande => {
      if (produitCommande.produit?.type === "burger") {
        produitCommande.burger = produitCommande.produit;
        produitCommande.produit = null;
        this.burgers.push(produitCommande);
      } if (produitCommande.produit?.type === "menu") {
        produitCommande.menu = produitCommande.produit;
        produitCommande.produit = null;
        this.menus.push(produitCommande);
      } if (produitCommande.produit?.type === "boisson") {
        produitCommande.boisson = produitCommande.produit;
        produitCommande.produit = null;
        this.boissons.push(produitCommande);
      } if (produitCommande.produit?.type === "frite") {
        produitCommande.frite = produitCommande.produit;
        produitCommande.produit = null;
        this.frites.push(produitCommande);
      }
      this.panier.burgers = this.burgers;
      this.panier.menus = this.menus;
      this.panier.boissons = this.boissons;
      this.panier.frites = this.frites;
    });
    localStorage.setItem('panier', JSON.stringify(this.panier));
  }

  sendOrder(order: Panier): Observable<any> {
    return this._http.post<any>(this._orderUrl, order);
  }

  getClientOrder(id: number | any): Observable<any> {
    const params = new HttpParams().set('id', id);
    return this._http.get<any>(`${baseUrl}clients/${id}/commandes`, { params: params });
  }

  getAllOrders() {
    return this._http.get<any>(this._orderUrl);
  }
}
