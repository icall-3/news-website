import { CardService } from './../feed/card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  constructor(private cardService: CardService) {}

  ngOnInit(): void {}

  public setUrl(category: string): void {
    var url =
      'https://newsapi.org/v2/top-headlines?country=us&category=' +
      category +
      '&apiKey=ca343f5fb14c4fe9946c2af070bdf527';
    this.cardService.changeUrl(url);
    window.location.reload();
  }
}
