import { CardService } from './feed/card.service';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'news-website';

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  constructor(
    private observer: BreakpointObserver,
    private cardService: CardService,
    private searchService: SearchService
  ) {}

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 1450px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  public homeButton(): void {
    this.cardService.changeUrl(
      'https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=ca343f5fb14c4fe9946c2af070bdf527'
    );
    window.location.reload();
  }

  public getCategory(): string {
    var category = this.cardService.getUrl().split(/&category=|&/);
    return category[1];
  }

  public onChange(event: Event): void {
    const target = event.target;
    const value = (target as any).value;
    console.log(value);
    this.searchService.searchTermObs.next(value);
  }
}
