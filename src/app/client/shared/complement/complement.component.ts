import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/client/shared/models/produit';

@Component({
  selector: 'mog-complement',
  templateUrl: './complement.component.html',
  styleUrls: ['./complement.component.scss']
})
export class ComplementComponent implements OnInit {
  @Input() complement: Produit | null = null;
  @Input() prix?: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
