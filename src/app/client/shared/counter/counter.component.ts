import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produit } from '../models/produit';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'mog-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() defaultValue: number = 0;
  @Input() produit: Produit | any = null;
  @Input() listType: string = "";
  @Input() disabled: boolean = false;
  @Output() amountChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor(private _cartService: CartService) { }

  ngOnInit() {
    if (this.listType === 'produit') {
      this._cartService.addToCart(this.produit, this.defaultValue);
    }
  }

  increase() {
    this.defaultValue += 1;
    this.updateAmount();
    this.amountChanged.emit(this.defaultValue);
  }

  decrease() {
    this.defaultValue -= 1;
    this.updateAmount();
    if (this.defaultValue <= 0) {
      this.defaultValue = 0;
      if (this.defaultValue == 0) {
        this._cartService.removeProduct(this.produit.id);
      }
    }
    this.amountChanged.emit(this.defaultValue);
  }

  updateAmount() {
    this._cartService.produits.forEach(produitCommande => {
      if (produitCommande.produit.id === this.produit.id) {
        produitCommande.quantite = this.defaultValue;
      }
    });
  }
}
