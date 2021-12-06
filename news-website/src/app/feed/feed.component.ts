import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { NewsResponse } from 'src/interfaces/NewsResponse';
import { CardService } from './card.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Article } from 'src/interfaces/Article';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  public articles: Observable<Article[]> = this.cardService
    .getEverything()
    .pipe(
      map((result: NewsResponse) => {
        return result.articles;
      })
    );

  public searchedArticles: Observable<Article[]> = this.searchService.search(
    this.articles
  );
  constructor(
    private cardService: CardService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.articles = this.cardService.getEverything().pipe(
      map((result: NewsResponse) => {
        return result.articles;
      })
    );
  }
}
