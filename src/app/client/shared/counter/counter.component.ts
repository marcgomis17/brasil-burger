import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produit } from 'src/app/shared/models/produit';
import { Added } from '../models/added';
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
    this.added.forEach(addedProduct => {
      if (this.produit.id === addedProduct.id) {
        this.defaultValue = addedProduct.quantite;
      }
    })
  }

  increase() {
    this.defaultValue += 1;
    this.amountChanged.emit(this.defaultValue);
  }

  decrease() {
    this.defaultValue -= 1;
    if (this.defaultValue < 0) {
      this.defaultValue = 0;
    }
    this.amountChanged.emit(this.defaultValue);
  }
}
