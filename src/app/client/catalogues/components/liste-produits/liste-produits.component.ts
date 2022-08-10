import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produit } from 'src/app/client/shared/models/produit';

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
  @Output() amountChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getAmount(amount: number) {
    this.amountChanged.emit(amount);
  }
}
