import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mog-catalog-filter',
  templateUrl: './catalog-filter.component.html',
  styleUrls: ['./catalog-filter.component.scss']
})
export class CatalogFilterComponent implements OnInit {
  @Output() onSelectedFilter: EventEmitter<string> = new EventEmitter();
  produits: string = "burgers";

  constructor() { }

  ngOnInit(): void {
  }

  filter(selectedItem: string): void {
    this.onSelectedFilter.emit(selectedItem);
  }
}
