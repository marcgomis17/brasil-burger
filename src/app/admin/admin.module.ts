import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminSharedModule } from './shared/shared.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin-component';
import { CommandesComponent } from './commandes/commandes.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    CommandesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminSharedModule,
    SharedModule
  ]
})
export class AdminModule { }
