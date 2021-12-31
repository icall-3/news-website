import { CardService } from './../feed/card.service';
import { Component, OnInit } from '@angular/core';

/**
 * The component that makes the navigation between categories possible
 */
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  /**
   * Includes the card service for requesting articles from the right category
   * @param cardService The service that makes a request to the API
   */
  constructor(private cardService: CardService) {}

  /**
   * @ignore
   */
  ngOnInit(): void {}

  /**
   * Method to set the url by changing the category to the desired one
   * and reloading the page with the new category
   * @param category The category of the news
   */
  public setUrl(category: string): void {
    var url =
      'https://newsapi.org/v2/top-headlines?country=us&category=' +
      category +
      '&apiKey=ca343f5fb14c4fe9946c2af070bdf527';
    this.cardService.changeUrl(url);
    this.setCategory(category);
    window.location.reload();
  }

  public setCategory(category: string) {
    sessionStorage.setItem('category', category);
  }
}
