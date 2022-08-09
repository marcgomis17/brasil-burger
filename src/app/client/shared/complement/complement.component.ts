import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produit } from 'src/app/client/shared/models/produit';

@Component({
  selector: 'mog-complement',
  templateUrl: './complement.component.html',
  styleUrls: ['./complement.component.scss']
})
export class ComplementComponent implements OnInit {
  @Input() complement: Produit | null = null;
  @Input() prix?: number | null = null;
  @Input() id: number | undefined = undefined;
  @Output() amountChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  verify(amount: number) {
    this.amountChanged.emit(amount);
  }
}
