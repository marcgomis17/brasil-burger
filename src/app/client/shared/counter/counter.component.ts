import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mog-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  amount: number = 1;
  constructor() { }

  ngOnInit() {
  }

  increase() {
    this.amount += 1;
  }

  decrease() {
    if (this.amount <= 1) {
      this.amount == 1;
    } else {
      this.amount -= 1;
    }
  }
}
