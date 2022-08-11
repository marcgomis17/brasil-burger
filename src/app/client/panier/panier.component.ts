import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../shared/services/cart.service';

@Component({
    selector: 'mog-panier',
    templateUrl: './panier.component.html',
    styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
    products$: Observable<any> = new Observable<any>();

    constructor(private _cartService: CartService) { }

    ngOnInit(): void {
        this.products$ = this._cartService.cartSubject.asObservable();
    }
}
