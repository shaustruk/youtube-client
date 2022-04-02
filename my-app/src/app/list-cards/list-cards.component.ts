import { Component, Input, OnInit } from '@angular/core';
import { IItem } from '../header-components/search-item-model/search-item-model.component';
import { listCards, objStatistics, objURL } from '../mocks/cards-list.mock';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent implements OnInit {
  public title = 'Hello. Push search for start';
  listObj: IItem[] = listCards;
  objUrl = objURL;
  objStatist = objStatistics;
  constructor() { }

  ngOnInit(): void {
  };
  @Input() isShowCards: boolean;
}


