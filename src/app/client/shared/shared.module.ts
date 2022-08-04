import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { ComplementComponent } from './complement/complement.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ComplementComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ComplementComponent,
    SharedModule
  ]
})
export class ClientSharedModule { }
