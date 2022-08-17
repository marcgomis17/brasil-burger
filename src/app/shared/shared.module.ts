import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { EtatPipe } from './services/pipes/etat.pipe';
import { DateFilterPipe } from './services/pipes/date-filter.pipe';

@NgModule({
  declarations: [
    AvatarComponent,
    OrderListComponent,
    EtatPipe,
    DateFilterPipe,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    AvatarComponent,
    OrderListComponent,
    EtatPipe,
  ]
})
export class SharedModule { }
