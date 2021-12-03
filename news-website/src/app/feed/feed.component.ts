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

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.articles = this.cardService.getEverything().pipe(
      map((result: NewsResponse) => {
        return result.articles;
      })
    );
  }
}
