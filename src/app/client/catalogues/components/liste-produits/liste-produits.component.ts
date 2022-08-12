import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Added } from 'src/app/client/shared/models/added';
import { Produit } from 'src/app/client/shared/models/produit';
import { CartService } from 'src/app/client/shared/services/cart.service';

@Component({
  selector: 'mog-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.scss']
})
export class ListeProduitsComponent implements OnInit {
  @Input() produits: Produit[] | any = [];
  @Input() listType: string = "";
  @Input() prix?: number | null = null;
  @Input() disabled: boolean = false;
  added: Added[] = [];
  @Output() amountChanged: EventEmitter<number> = new EventEmitter();

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    if (this.listType === 'produit') {
      let produits = this._cartService.getProducts();
      this.getAdded(produits);
    }
  }

  getAmount(amount: number) {
    this.amountChanged.emit(amount);
  }

  getAdded(produits: []) {
    produits.forEach((produitCommande) => {
      let produit = {
        quantite: produitCommande['quantite'],
        id: produitCommande['produit']['id']
      }
      this.added.push(produit);
    });
  }
}
