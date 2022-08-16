import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProduitCommande } from 'src/app/shared/models/produitCommande';
import { Quartier } from 'src/app/shared/models/quartier';
import { AdressService } from 'src/app/shared/services/adress.service';
import { Panier } from '../../shared/models/panier';
import { CartService } from '../../shared/services/cart.service';
import { OrderService } from '../../../shared/services/order.service';
import { PriceService } from '../../shared/services/price.service';

@Component({
  selector: 'mog-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  deliver: boolean = true;
  zones$: Observable<any> | undefined = undefined;
  produits: ProduitCommande[] = [];
  zones: Zone[] = [];
  quartiers: Quartier[] = [];
  prixLivraison: number = 0;
  prixTotal: number = 0;
  orderPrice: number = 0;
  selectQuartier: Quartier | undefined = undefined;

  constructor(private _cartService: CartService, private _orderService: OrderService, private _adress: AdressService, private _priceService: PriceService) { }

  ngOnInit(): void {
    this.zones$ = this._adress.getLocations();
    this.zones$.pipe(
      map(res => {
        res['hydra:member'].forEach((zone: any) => {
          this.zones.push(zone);
        });
      })
    ).subscribe();
    this.produits = this._cartService.getProducts();
    this.prixTotal = this._priceService.computePrice();
  }

  getValue(choice: any) {
    this.deliver = choice.target.value;
  }

  getZone(select: any) {
    let idZone = parseInt(select.value);
    this.zones.forEach((zone: any) => {
      if (zone.id === idZone) {
        this.prixLivraison = zone.prix;
        this.orderPrice = this.prixLivraison + this.prixTotal;
        this.quartiers = zone.quartiers;
      }
    });
  }

  getQuartier(select: any) {
    this.quartiers.forEach(quartier => {
      if (quartier.id === parseInt(select.value)) {
        this.selectQuartier = quartier;
      }
    })
  }

  order() {
    let cart: Panier = JSON.parse(localStorage.getItem('panier') || '{}');
    cart.quartier = this.selectQuartier;
    this._orderService.sendOrder(cart).subscribe(console.log);
  }
}