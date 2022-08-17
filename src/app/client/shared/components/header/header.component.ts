import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'mog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  search: FormControl = new FormControl();
  productAmount: number = 0;
  isConnected: boolean = false;

  constructor(private _cartService: CartService, private _auth: AuthenticationService) { }

  ngOnInit(): void {
    this.isConnected = this._auth.isConnected();
    this._cartService.cartSubject.subscribe(products => {
      this.productAmount = products.length;
      if (products.length === 0) {
        this.productAmount = this._cartService.getProducts().length;
      }
    })
  }
}
