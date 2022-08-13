import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mog-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  deliver: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  getValue(choice: any) {
    this.deliver = choice.target.value;
  }

}
