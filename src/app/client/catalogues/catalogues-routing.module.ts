import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProduitComponent } from 'src/app/shared/detail-produit/detail-produit.component';
import { CataloguesComponent } from './catalogues.component';

const routes: Routes = [
  { path: '', component: CataloguesComponent },
  { path: 'catalogues', component: CataloguesComponent },
  { path: 'details/:id', component: DetailProduitComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CataloguesRoutingModule { }
