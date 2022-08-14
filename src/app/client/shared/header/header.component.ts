import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'mog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  search: FormControl = new FormControl();
  productAmount: number = 0;

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this._cartService.cartSubject.subscribe(products => {
      this.productAmount = products.length;
      if (products.length === 0) {
        this.productAmount = this._cartService.getProducts().length;
      }
    })
  }
}
