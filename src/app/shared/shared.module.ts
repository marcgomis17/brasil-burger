import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AvatarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    AvatarComponent
  ]
})
export class SharedModule { }
