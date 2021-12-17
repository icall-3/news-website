import { CardService } from './../feed/card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css'],
})
export class LanguagesComponent implements OnInit {
  constructor(private cardService: CardService) {}

  ngOnInit(): void {}

  public setUrl(language: string): void {
    var url =
      'https://newsapi.org/v2/top-headlines?country=us&category=' +
      language +
      '&apiKey=ca343f5fb14c4fe9946c2af070bdf527';
  }
}
