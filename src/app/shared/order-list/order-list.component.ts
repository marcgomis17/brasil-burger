import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Livraison } from 'src/app/admin/shared/models/livraison';
import { LivraisonService } from 'src/app/admin/shared/services/livraison.service';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import { Roles } from 'src/app/authentication/services/roles';
import { User } from '../models/user';
import { AdressService } from '../services/adress.service';

@Component({
  selector: 'mog-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  @Input() orders: [] = [];
  @Input() statusFilterValue: string | undefined = "En cours";
  selectedOrders: [] | any = [];
  livreur: User | undefined;
  livreurs: [] = [];
  zones: [] = [];
  zones$: Observable<any> | undefined = undefined;
  livreurs$: Observable<any> | undefined = undefined;
  dateFilterValue: string = "";
  zoneFilterValue: number = 0;
  user: User | any;
  roles: Roles | any;
  orderFilter: string = "";

  constructor(private _auth: AuthenticationService, private _adress: AdressService, private _livraison: LivraisonService) { }

  ngOnInit(): void {
    this.user = this._auth.getUser();
    this.zones$ = this._adress.getLocations();
    this.livreurs$ = this._livraison.getDeliverers();
    this.livreurs$?.pipe(
      map(res => {
        this.livreurs = res['hydra:member'];
      })
    ).subscribe();
    this.zones$?.pipe(
      map(res => {
        this.zones = res['hydra:member'];
      })
    ).subscribe();
  }

  getStatusFilterValue(select: any) {
    this.statusFilterValue = select.target.value;
  }

  getDateFilterValue(select: any) {
    this.dateFilterValue = select.target.value;
  }

  getZoneFilterValue(select: any) {
    this.zoneFilterValue = parseInt(select.target.value);
  }

  getOrder(check: any) {
    let checkbox = check.target;
    if (checkbox.checked) {
      this.orders.forEach(order => {
        if (order['id'] === parseInt(checkbox.value)) {
          this.selectedOrders.push(order);
        }
      });
    } if (!checkbox.checked) {
      this.selectedOrders.forEach((selectedOrder: any) => {
        if (selectedOrder['id'] === parseInt(checkbox.value)) {
          delete this.selectedOrders[this.selectedOrders.indexOf(selectedOrder)];
          this.selectedOrders = this.selectedOrders.filter((el: any) => el !== null);
        }
      })
    }
  }

  getLivreur(select: any) {
    this.livreurs.forEach((el: any) => {
      if (el.id === parseInt(select.target.value)) {
        this.livreur = el;
      }
    })
  }

  makeDeliver() {
    let livraison: Livraison = {
      livreur: this.livreur,
      commandes: this.selectedOrders
    }
    this.zones.forEach((zone: any) => {
      if (zone.id === this.zoneFilterValue) {
        livraison.zone = zone;
      }
    });
    this._livraison.sendDelivery(livraison).subscribe(console.log);
  }
}
