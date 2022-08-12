import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private _cartService: CartService) { }

  computePrice() {
    let products = this._cartService.getProducts();
    let totalPrice = 0;
    products.forEach((productOrder: any) => {
      let product = productOrder.produit;
      totalPrice += productOrder.quantite * product.prix;
    });
    return totalPrice;
  }
}
