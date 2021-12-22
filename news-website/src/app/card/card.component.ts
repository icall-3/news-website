import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/interfaces/Article';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() article: Article = {} as Article;

  constructor() {}

  ngOnInit(): void {}

  openUrl(url: string): void {
    window.open(url);
  }

  get articleTitle() {
    return this.article && this.article.title ? this.article.title : null;
  }

  get articleDescription() {
    return this.article && this.article.description
      ? this.article.description
      : null;
  }

  get articleAuthor() {
    return this.article && this.article.author ? this.article.author : '';
  }

  get articlePublishedAt() {
    return this.article && this.article.publishedAt
      ? this.article.publishedAt
      : null;
  }
}
