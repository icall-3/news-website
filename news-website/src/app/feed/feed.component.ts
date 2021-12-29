import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { NewsResponse } from 'src/interfaces/NewsResponse';
import { CardService } from './card.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Article } from 'src/interfaces/Article';

/**
 * The component that displays each article obtained from the API response
 */
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  /**
   * The list of articles obtained from the API response
   */
  public articles: Observable<Article[]> = this.cardService
    .getEverything()
    .pipe(
      map((result: NewsResponse) => {
        return result.articles;
      })
    );

  /**
   * The articles that matched the input value from the search bar
   */
  public searchedArticles: Observable<Article[]> = this.searchService.search(
    this.articles
  );

  /**
   * Includes the card service and the search service
   * @param cardService The service that makes a request to the API
   * @param searchService The service that searches through the articles
   */
  constructor(
    private cardService: CardService,
    private searchService: SearchService
  ) {}

  /**
   * Initializes the list of articles with the data obtained from the API response
   */
  ngOnInit(): void {
    this.articles = this.cardService.getEverything().pipe(
      map((result: NewsResponse) => {
        return result.articles;
      })
    );
  }
}
