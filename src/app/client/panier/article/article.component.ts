import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../../shared/models/produit';

@Component({
  selector: 'mog-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() produit: Produit | null = null;

  constructor() { }

  ngOnInit(): void {
  }
}
