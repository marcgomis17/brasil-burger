import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { EtatPipe } from './services/pipes/etat.pipe';
import { DateFilterPipe } from './services/pipes/date-filter.pipe';
import { FormsModule } from '@angular/forms';
import { ZonePipe } from './services/pipes/zone.pipe';
import { SearchPipe } from './services/pipes/search.pipe';

@NgModule({
  declarations: [
    AvatarComponent,
    OrderListComponent,
    EtatPipe,
    DateFilterPipe,
    ZonePipe,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    RouterModule,
    AvatarComponent,
    OrderListComponent,
    EtatPipe,
  ]
})
export class SharedModule { }
