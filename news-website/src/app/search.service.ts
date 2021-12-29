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

/**
 * The service that searches through the articles
 */
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  /**
   * The list of articles to be searched, obtained from the API response
   */
  public searchTermObs = new BehaviorSubject<string>(undefined);

  /**
   * Shows the spinner while the search takes place, and then returns the matching articles
   * @param collectionObs The list of articles obtained from the API response
   * @returns The articles whose title matched the input
   */
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

  /**
   * Includes the spinner service for displaying the spinner while the search takes place
   * @param spinnerService The service that shows or hides the spinner
   */
  constructor(private spinnerService: SpinnerService) {}

  /**
   * Searches through the articles to find the ones whose title matches the desired text
   * @param collectionObs The list of articles obtained from the API response
   * @param term The input value from the search bar
   * @returns The articles whose title matched the input from the search bar
   */
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
