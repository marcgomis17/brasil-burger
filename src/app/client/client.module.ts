import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientSharedModule } from './shared/shared.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ClientSharedModule,
    SharedModule
  ],
  exports: []
})
export class ClientModule { }
