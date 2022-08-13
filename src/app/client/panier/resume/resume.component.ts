import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../shared/services/cart.service';
import { OrderService } from '../../shared/services/order.service';
import { PriceService } from '../../shared/services/price.service';

@Component({
  selector: 'mog-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  totalPrice: number = 0;

  constructor(private _priceService: PriceService, private _router: Router, private _orderService: OrderService, private _cartService: CartService) { }

  ngOnInit(): void {
    this.totalPrice = this._priceService.computePrice();
  }

  submitOrder(): void {
    if (localStorage.getItem('user') === null) {
      this._router.navigateByUrl('/auth/login');
    } else {
      this._orderService.makeCart(this._cartService.getProducts());
      this._router.navigateByUrl('client/panier/commande');
    }
  }
}
