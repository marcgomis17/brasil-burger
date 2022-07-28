import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mog-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.scss']
})
export class DetailProduitComponent implements OnInit {
  isClient: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
