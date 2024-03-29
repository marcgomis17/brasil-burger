import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CartService } from 'src/app/client/shared/services/cart.service';
import { Produit } from 'src/app/shared/models/produit';
import { DetailsProduitService } from 'src/app/shared/services/details-produit.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.scss']
})
export class DetailProduitComponent implements OnInit {
  id: number = 0;
  produit: Produit | null = null;
  details$: Observable<any> | undefined = undefined;
  errorMsg: string | undefined = undefined;
  disabled: boolean = false;

  constructor(private _detailService: DetailsProduitService, private _route: ActivatedRoute, private _cartService: CartService) { }

  ngOnInit() {
    this._route.params.pipe(
      map(res => {
        this.id = res['id'];
      })
    ).subscribe();
    this.details$ = this._detailService.getDetails(this.id);
    this.details$?.pipe(
      map(res => {
        this.produit = res.produit;
      })
    ).subscribe();
  }

  getAmount(amount: number) {
    if (this.produit?.type?.toLowerCase() === 'menu') {
      this.produit.menuTailles?.forEach((menuTaille: any) => {
        let newAmount = menuTaille.quantite - amount;
        if (newAmount === 0) {
          this.disabled = true;
          this.errorMsg = "Vous avez atteint la quantité maximale";
        } else {
          this.disabled = false;
          this.errorMsg = "";
        }
      });
    }
  }

  addToCart() {
    this._cartService.addToCart(this.produit, 1);
  }
}
