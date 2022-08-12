import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PriceService } from '../../shared/services/price.service';

@Component({
  selector: 'mog-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  totalPrice: number = 0;

  constructor(private _priceService: PriceService, private _router: Router) { }

  ngOnInit(): void {
    this.totalPrice = this._priceService.computePrice();
  }

  submitOrder(): void {
    console.log(localStorage.getItem('user'));
    if (localStorage.getItem('user') === null) {
      this._router.navigateByUrl('/auth/login');
    }
  }
}
