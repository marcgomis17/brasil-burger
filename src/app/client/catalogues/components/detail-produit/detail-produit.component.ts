import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DetailsProduitService } from 'src/app/shared/services/details-produit.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.scss']
})
export class DetailProduitComponent implements OnInit {
  id: number = 0;
  details$: Observable<any> | undefined = undefined;

  constructor(private _detailService: DetailsProduitService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.pipe(
      map(res => {
        this.id = res['id'];
      })
    ).subscribe();
    this.details$ = this._detailService.getDetails(this.id);
  }
}
