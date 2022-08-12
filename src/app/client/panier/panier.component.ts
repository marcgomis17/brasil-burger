import { Component, OnInit } from '@angular/core';
import { Produit } from '../shared/models/produit';
import { CartService } from '../shared/services/cart.service';

@Component({
    selector: 'mog-panier',
    templateUrl: './panier.component.html',
    styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
    produits: Produit[] = [];

    constructor(private _cartService: CartService) { }

    ngOnInit(): void {
        this._cartService.getProductsObs().subscribe(console.log);
    }
}