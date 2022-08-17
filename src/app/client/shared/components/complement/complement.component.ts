import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produit } from 'src/app/shared/models/produit';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'mog-complement',
  templateUrl: './complement.component.html',
  styleUrls: ['./complement.component.scss']
})
export class ComplementComponent implements OnInit {
  @Input() produitDetail: Produit | any = undefined;
  @Input() complement: Produit | any = null;
  @Input() prix?: number | null = null;
  @Input() id: number | undefined = undefined;
  @Input() disabled: boolean = false;
  @Output() amountChanged: EventEmitter<number> = new EventEmitter<number>();
  friteAmount: number = 0;

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
  }

  verify(amount: number) {
    this.amountChanged.emit(amount);
    if (amount === 1) {
      this._cartService.addToCart(this.complement, amount);
    } else if (amount === 0) {
      this._cartService.removeProduct(this.complement.id);
    } else {
      this.updateAmount(amount);
    }
  }

  updateAmount(value: number) {
    this._cartService.produits.forEach(produitCommande => {
      if (produitCommande.produit?.id === this.complement?.id) {
        if (value !== 0) {
          produitCommande.quantite = value;
          localStorage.setItem('produits', JSON.stringify(this._cartService.produits));
        } else {
          this._cartService.removeProduct(this.complement?.id);
        }
      }
    });
  }
}
