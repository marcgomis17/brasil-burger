import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mog-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  amount: number = 0;
  @Input() disabled: boolean = false;
  @Output() amountChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  increase() {
    this.amount += 1;
    this.amountChanged.emit(this.amount);
  }

  decrease() {
    if (this.amount <= 0) {
      this.amount == 1;
    } else {
      this.amount -= 1;
    }
    this.amountChanged.emit(this.amount);
  }
}
