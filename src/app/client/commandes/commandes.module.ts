import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientSharedModule } from '../shared/shared.module';
import { CommandeComponent } from './commandes.component';
import { CommandeRoutingModule } from './commandes-routing.module';

@NgModule({
  declarations: [
    CommandeComponent
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    ClientSharedModule,
  ]
})
export class CommandesModule { }
