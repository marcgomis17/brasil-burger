import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientSharedModule } from './shared/shared.module';
import { CatalogFilterComponent } from './components/catalog-filter/catalog-filter.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    CatalogFilterComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ClientSharedModule
  ]
})
export class ClientModule { }
