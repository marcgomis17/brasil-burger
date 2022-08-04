import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CataloguesComponent } from './catalogues.component';
import { DetailProduitComponent } from './components/detail-produit/detail-produit.component';

const routes: Routes = [
  { path: '', component: CataloguesComponent },
  { path: 'details/:id', component: DetailProduitComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CataloguesRoutingModule { }
