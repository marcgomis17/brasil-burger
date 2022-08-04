import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/client/shared/models/produit';

@Component({
  selector: 'mog-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.scss']
})
export class ListeProduitsComponent implements OnInit {
  @Input() produits: Produit[] | any = [];
  @Input() listType: string = "";

  constructor() { }

  ngOnInit(): void {
  }
}
