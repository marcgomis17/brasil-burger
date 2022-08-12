import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';

@Component({
    selector: 'mog-panier',
    templateUrl: './panier.component.html',
    styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
    produits: [] = [];

    constructor(private _cartService: CartService) { }

    ngOnInit(): void {
        this.produits = this._cartService.getProducts();
    }
}