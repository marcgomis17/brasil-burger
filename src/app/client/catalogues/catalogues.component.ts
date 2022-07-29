import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Catalogue } from '../shared/models/catalogue';
import { Produit } from '../shared/models/produit';
import { CatalogueService } from '../shared/services/catalogue.service';

@Component({
  selector: 'mog-catalogues',
  templateUrl: './catalogues.component.html',
  styleUrls: ['./catalogues.component.scss']
})
export class CataloguesComponent implements OnInit {
  catalogue$: Observable<Catalogue> | undefined = undefined;
  produits: Produit[] = [];

  constructor(private _catalogueService: CatalogueService) { }

  ngOnInit(): void {
    this.catalogue$ = this._catalogueService.getCatalogue();
  }
}
