import { CardService } from './feed/card.service';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SearchService } from './search.service';

/**
 * The main component of the website
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /**
   The title of the website
   */
  title = 'NewsWebsite';

  /**
   The sidebar category menu
   */
  @ViewChild(MatSidenav) sidenav: MatSidenav;

  /**
   *Declaration of parameters
   * @param observer An observer for checking the width of the webpage
   * @param cardService The card service that will be used to extract and display the category of the url
   * @param searchService The search service that will be called when there is input in the searchbar
   */
  constructor(
    private observer: BreakpointObserver,
    private cardService: CardService,
    private searchService: SearchService
  ) {}

  /**
   * Decides if the sidebar menu should be displayed or not depending on the width
   * of the screen
   */
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

  /**
   * Refreshes the page if the title (home button) is clicked
   */
  public homeButton(): void {
    this.cardService.changeUrl(
      'https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=ca343f5fb14c4fe9946c2af070bdf527'
    );
    sessionStorage.setItem('category', 'general');
    window.location.reload();
  }

  /**
   * Truncates the category from the url string
   * @returns The category of the url
   */
  public getCategory(): string {
    var category = this.cardService.getUrl().split(/&category=|&/);
    return category[1];
  }

  /**
   * Takes the input from the searchbar and calls the search service with that input value
   * @param event An event which takes place in the DOM, in our case the releasing of a key
   */
  public onChange(event: Event): void {
    const target = event.target;
    const value = (target as any).value;
    console.log(value);
    this.searchService.searchTermObs.next(value);
  }
}
