import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsResponse } from 'src/interfaces/NewsResponse';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private url: string =
    'https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=ca343f5fb14c4fe9946c2af070bdf527';

  constructor(private http: HttpClient) {}

  public getUrl(): string {
    return this.url;
  }

  public changeUrl(newUrl: string): void {
    this.url = newUrl;
    console.log('category' + this.url);
  }

  public getEverything(): Observable<NewsResponse> {
    return this.http.get<NewsResponse>(this.url);
  }
}
