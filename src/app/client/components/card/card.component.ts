import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mog-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cardImg: string = "assets/images/card-img.svg";
  cartAdd: string = "assets/icons/cart-add.svg";
  isComplement: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
