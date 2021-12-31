import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsResponse } from 'src/interfaces/NewsResponse';
/**
 * The service that makes a request to the API
 */
@Injectable({
  providedIn: 'root',
})
export class CardService {
  /**
   * The url of the API
   */
  private url: string =
    'https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=ca343f5fb14c4fe9946c2af070bdf527';

  /**
   * Includes the HttpClient class for performing API requests
   * @param http A predefined class that performs HTTP requests
   */
  constructor(private http: HttpClient) {}

  /**
   * Get method for the url
   * @returns The url of the API
   */
  public getUrl(): string {
    return this.url;
  }

  /**
   * Replaces the old url with the new given url
   * @param newUrl The new url
   */
  public changeUrl(newUrl: string): void {
    sessionStorage.setItem('newUrl', newUrl);
  }

  /**
   * Requests information from the API
   * @returns The API response as an Observable of NewsResponse type
   */
  public getEverything(): Observable<NewsResponse> {
    if (sessionStorage.getItem('newUrl') != null) {
      this.url = sessionStorage.getItem('newUrl');
    }
    if (sessionStorage.getItem('category') != null) {
      var category = sessionStorage.getItem('category');
      console.log(category);
      // document.getElementById(category.toString()).style.color = '#fffff';
    }
    return this.http.get<NewsResponse>(this.url);
  }
}
