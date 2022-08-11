import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'catalogues', pathMatch: 'full' },
  { path: 'catalogues', loadChildren: () => import('./catalogues/catalogues.module').then(m => m.CataloguesModule) },
  { path: 'panier', loadChildren: () => import('./panier/panier.module').then(m => m.PanierModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
