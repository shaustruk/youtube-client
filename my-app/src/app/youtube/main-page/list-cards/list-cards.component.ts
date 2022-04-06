import { Component, Input, OnInit } from '@angular/core';
import { IItem } from '../../models/search-item-model.component';
import { items } from '../../../mocks/cards-list.mock';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent implements OnInit {
  public listCards: IItem[] = items;

  public title = 'Hello. Push search for start';

  @Input() isShowCards: boolean;
  @Input() wordTitle: string;
  @Input() isBtnDatePush: boolean;
  @Input() isBtnViewPush: boolean;
  /*------sorts-----*/

  constructor() { }

  ngOnInit(): void { };


}

