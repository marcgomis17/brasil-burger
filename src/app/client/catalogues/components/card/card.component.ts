import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produit } from 'src/app/client/shared/models/produit';

@Component({
  selector: 'mog-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('produit') produit: Produit | null = null;
  @Output() onSelectedItem: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getDetails(id: number | undefined) {
    this.onSelectedItem.emit(id);
  }

  addCart() {
    console.log('Clicked!!!!');
  }
}
