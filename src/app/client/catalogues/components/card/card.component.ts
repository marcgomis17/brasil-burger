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
  @Input() produit: Produit | null = null;
  @Input() added: Added[] = [];
  counterValue: number = 0;
  @Output() onSelectedItem: EventEmitter<any> = new EventEmitter();

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this.isAdded(this.produit);
  }

  getDetails(id: number | undefined) {
    this.onSelectedItem.emit(id);
  }

  checkAmount(amount: number) {
    this.counterValue = amount;
    if (amount === 0) {
      this.show = false;
      this.counterValue = 1;
      this._cartService.updateCart();
    }
  }

  isAdded(produit: Produit | null) {
    this.added.forEach(added => {
      if (produit?.id === added.id) {
        this.show = true;
        this.counterValue = added.quantite;
      }
    });
  }
}
