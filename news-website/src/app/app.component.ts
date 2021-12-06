import { CardService } from './feed/card.service';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'news-website';

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(
    private observer: BreakpointObserver,
    private cardService: CardService
  ) {}

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 1450px)']).subscribe((res) => {
      if (res.matches) {
        console.log('shoudl be closed');
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        console.log('shoudlnt be closed');
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
    console.log(category[1]);
    return category[1];
  }
}
