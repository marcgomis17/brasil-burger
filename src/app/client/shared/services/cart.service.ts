import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Produit } from '../models/produit';
import { ProduitCommande } from '../models/produitCommande';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  produits: ProduitCommande[] = [];
  cartSubject = new BehaviorSubject(this.produits);
  produits$ = this.cartSubject.asObservable();

  constructor() { }

  addToCart(produit: Produit, quantite: number) {
    let produitCommande: ProduitCommande = {
      quantite,
      produit
    }
    produit.added = true;
    this.produits.push(produitCommande);
    this.cartSubject.next(this.produits);
    localStorage.setItem('produits', JSON.stringify(this.produits));
  }

  getProducts() {
    if (typeof (JSON.parse(localStorage.getItem('produits') || '{}')) === 'object') {
      return JSON.parse(localStorage.getItem('produits') || '{}');
    }
  }

  updateCart() {
    this.produits = this.produits.filter((el) => el !== null);
    localStorage.setItem('produits', JSON.stringify(this.produits));
  }

  removeProduct(id: number) {
    this.produits.forEach(produitCommande => {
      if (id === produitCommande.produit.id) {
        delete this.produits[this.produits.indexOf(produitCommande)];
        this.updateCart();
      }
    });
  }
}
