import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'mog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  search: FormControl = new FormControl();
  logo: string = "assets/logo.png";
  cart: string = "assets/icons/cart.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
