import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CataloguesRoutingModule } from './catalogues-routing.module';
import { CataloguesComponent } from './catalogues.component';
import { CatalogFilterComponent } from './components/catalog-filter/catalog-filter.component';
import { CardComponent } from './components/card/card.component';
import { ClientSharedModule } from '../shared/shared.module';
import { ListeProduitsComponent } from './components/liste-produits/liste-produits.component';
import { DetailProduitComponent } from './components/detail-produit/detail-produit.component';

@NgModule({
  declarations: [
    CataloguesComponent,
    CatalogFilterComponent,
    CardComponent,
    ListeProduitsComponent,
    DetailProduitComponent,
  ],
  imports: [
    CommonModule,
    CataloguesRoutingModule,
    ClientSharedModule
  ],
  exports: []
})
export class CataloguesModule { }
