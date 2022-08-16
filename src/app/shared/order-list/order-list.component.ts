import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import { Panier } from 'src/app/client/shared/models/panier';
import { User } from '../models/user';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'mog-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  private _user: User | undefined;
  orders: [] = [];

  constructor(private _orderService: OrderService, private _auth: AuthenticationService) { }

  ngOnInit(): void {
    this._user = this._auth.getUser();
    this._orderService.getClientOrder(this._user?.id).pipe(
      map((res) => {
        this.orders = res['hydra:member'];
        console.log(this.orders);
      })
    ).subscribe();
  }
}
