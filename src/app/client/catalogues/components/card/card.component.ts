import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/client/shared/models/produit';

@Component({
  selector: 'mog-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('produit') produit: Produit | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
