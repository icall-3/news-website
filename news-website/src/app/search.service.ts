import { SpinnerService } from './spinner/spinner.service';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  switchMap,
  tap,
} from 'rxjs';
import { Article } from 'src/interfaces/Article';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public searchTermObs = new BehaviorSubject<string>(undefined);

  public search(collectionObs: Observable<Article[]>): Observable<Article[]> {
    const result = this.searchTermObs.pipe(
      distinctUntilChanged(),
      debounceTime(400),
      tap(() => this.spinnerService.show()),
      switchMap((searchTerm) => this.doSearch(collectionObs, searchTerm)),
      tap(() => this.spinnerService.hide())
    );
    return result;
  }

  constructor(private spinnerService: SpinnerService) {}

  private doSearch(collectionObs: Observable<Article[]>, term: String) {
    return collectionObs.pipe(
      map((articles: Article[]) => {
        if (!term) {
          return articles;
        }
        const result = articles.filter((article: Article) => {
          term = term.toLowerCase();
          const title = article.title.toLowerCase();
          return title.includes(term.toString());
        });
        return result;
      })
    );
  }
}
