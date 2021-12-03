import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/interfaces/Article';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() article: Article;

  constructor() {}

  ngOnInit(): void {}

  openUrl(url: string): void {
    window.open(url);
  }
}
