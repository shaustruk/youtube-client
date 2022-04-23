import { Component, Input, OnInit } from '@angular/core';
import { IItem } from '../../models/search-item-model.component';
import { items } from '../../../mocks/cards-list.mock';
import { ShowCardService } from 'src/app/core/services/show-card.service';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss'],

})
export class ListCardsComponent {

  public listCards: IItem[] = items;

  public title = 'Hello. Push search for start';

  /*------sorts-----*/
  @Input() searchWord: string;
  @Input() clickDate: boolean;
  @Input() clickView: boolean;
  @Input() isShowCards: boolean = false;




}
