import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Added } from '../models/added';
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
  @Input() type: string = "";
  @Input() added: Added[] = [];
  @Input() disabled: boolean = false;
  @Output() amountChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor(private _cartService: CartService) { }

  ngOnInit() {
    this.added.forEach(produitAdded => {
      if (produitAdded.id === this.produit.id) {
        this.defaultValue = produitAdded.quantite;
      }
    });
    if (this.type === 'produit') {
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
    if (this.defaultValue < 0) {
      this.defaultValue = 0;
    }
    this.amountChanged.emit(this.defaultValue);
  }

  updateAmount() {
    this._cartService.produits.forEach(produitCommande => {
      if (produitCommande.produit.id === this.produit.id) {
        if (this.defaultValue !== 0) {
          produitCommande.quantite = this.defaultValue;
          localStorage.setItem('produits', JSON.stringify(this._cartService.produits));
        } else {
          this._cartService.removeProduct(this.produit.id);
        }
      }
    });
  }
}
