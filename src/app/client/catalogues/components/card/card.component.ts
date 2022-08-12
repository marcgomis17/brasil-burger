import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Added } from 'src/app/client/shared/models/added';
import { Produit } from 'src/app/client/shared/models/produit';
import { CartService } from 'src/app/client/shared/services/cart.service';

@Component({
  selector: 'mog-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  show: boolean = false;
  @Input() produit: Produit | any = null;
  @Input() added: Added[] = [];
  counterValue: number = 0;
  @Output() onSelectedItem: EventEmitter<any> = new EventEmitter();

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this.added.forEach(addedProduct => {
      if (addedProduct.id === this.produit.id) {
        this.show = true;
      }
    });
  }

  getDetails(id: number | undefined) {
    this.onSelectedItem.emit(id);
  }

  checkAmount(amount: number) {
    this.counterValue = amount;
    if (amount === 0) {
      this.show = false;
    }
    this.updateAmount(amount);
  }

  addProduct() {
    this.show = true;
    this.counterValue = 1;
    if (!this.isAdded(this.produit?.id)) {
      this._cartService.addToCart(this.produit, this.counterValue);
    }
  }

  isAdded(id: number) {
    this.added.forEach(added => {
      if (id !== added.id) {
        return false;
      } else {
        this.show = true;
        this.counterValue = added.quantite;
        return true;
      }
    });
    return false;
  }

  updateAmount(value: number) {
    this._cartService.produits.forEach(produitCommande => {
      if (produitCommande.produit.id === this.produit.id) {
        if (value !== 0) {
          produitCommande.quantite = value;
          localStorage.setItem('produits', JSON.stringify(this._cartService.produits));
        } else {
          this._cartService.removeProduct(this.produit.id);
        }
      }
    });
  }
}