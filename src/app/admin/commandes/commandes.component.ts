import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'mog-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent implements OnInit {
  statusFilterValue: string = "Terminée";
  orders: [] = [];

  constructor(private _orderService: OrderService) { }

  ngOnInit(): void {
    this._orderService.getAllOrders().pipe(
      map(res => {
        this.orders = res['hydra:member'];
      })
    ).subscribe()
  }

}
