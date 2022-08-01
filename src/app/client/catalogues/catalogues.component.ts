import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogue } from '../shared/models/catalogue';
import { CatalogueService } from '../shared/services/catalogue.service';

@Component({
  selector: 'mog-catalogues',
  templateUrl: './catalogues.component.html',
  styleUrls: ['./catalogues.component.scss']
})
export class CataloguesComponent implements OnInit {
  catalogue$: Observable<Catalogue> | undefined = undefined;
  selectedType: string = "burgers";

  constructor(private _catalogueService: CatalogueService) { }

  ngOnInit(): void {
    this.catalogue$ = this._catalogueService.getCatalogue();
  }

  setList(filterValue: string): void {
    if (filterValue === "menus") {
      this.selectedType = "menus";
    } else {
      this.selectedType = "burgers";
    }
  }
}
