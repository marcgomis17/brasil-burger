import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { RouterModule } from '@angular/router';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { ComplementComponent } from './complement/complement.component';

@NgModule({
  declarations: [
    AvatarComponent,
    DetailProduitComponent,
    ComplementComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    AvatarComponent,
    DetailProduitComponent,
  ]
})
export class SharedModule { }
