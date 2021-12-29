import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/interfaces/Article';
/**
 * The card component, every article is displayed in a card
 */
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  /**
   * The article that the card will display
   */
  @Input() article: Article = {} as Article;

  /**
   * @ignore
   */
  constructor() {}

  /**
   * @ignore
   */
  ngOnInit(): void {}

  /**
   * Opens the url of the article, redirecting to the page of the article
   * @param url The url of the article
   */
  openUrl(url: string): void {
    window.open(url);
  }

  /**
   * Get method for the title of the article
   */
  get articleTitle() {
    return this.article && this.article.title ? this.article.title : null;
  }

  /**
   * Get method for the description of the article
   */
  get articleDescription() {
    return this.article && this.article.description
      ? this.article.description
      : null;
  }

  /**
   * Get method for the author of the article
   */
  get articleAuthor() {
    return this.article && this.article.author ? this.article.author : '';
  }

  /**
   * Get method for the publishing date of the article
   */
  get articlePublishedAt() {
    return this.article && this.article.publishedAt
      ? this.article.publishedAt
      : null;
  }
}
