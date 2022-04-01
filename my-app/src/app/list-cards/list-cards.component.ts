import { Component, Input, OnInit } from '@angular/core';
import { lessons } from '../mocks/cards-list.mock';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent implements OnInit {
  public title = 'Hello. Push search for start';
  listCards = lessons;

  constructor() { }

  ngOnInit(): void {
    console.log(this.listCards);
    this.listCards.map(el => {
      console.log(el.statistics.commentCount);
    });
  }
  @Input() isShowCards: boolean;
}
