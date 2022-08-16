import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderLineComponent } from './order-line/order-line.component';

@NgModule({
  declarations: [
    AvatarComponent,
    OrderListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    AvatarComponent,
    OrderListComponent
  ]
})
export class SharedModule { }
