import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CataloguesRoutingModule } from './catalogues-routing.module';
import { CataloguesComponent } from './catalogues.component';
import { CatalogFilterComponent } from './components/catalog-filter/catalog-filter.component';
import { CardComponent } from './components/card/card.component';
import { ClientSharedModule } from '../shared/shared.module';
import { ListeProduitsComponent } from './components/liste-produits/liste-produits.component';

@NgModule({
  declarations: [
    CataloguesComponent,
    CatalogFilterComponent,
    CardComponent,
    ListeProduitsComponent,
  ],
  imports: [
    CommonModule,
    CataloguesRoutingModule,
    ClientSharedModule
  ]
})
export class CataloguesModule { }
