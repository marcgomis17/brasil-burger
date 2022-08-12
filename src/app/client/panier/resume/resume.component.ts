import { Component, OnInit } from '@angular/core';
import { PriceService } from '../../shared/services/price.service';

@Component({
  selector: 'mog-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  totalPrice: number = 0;

  constructor(private _priceService: PriceService) { }

  ngOnInit(): void {
    this.totalPrice = this._priceService.computePrice();
  }
}
