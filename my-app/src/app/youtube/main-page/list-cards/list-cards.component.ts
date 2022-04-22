import { Component, Input, OnInit } from '@angular/core';
import { IItem, IVideoYoutube } from '../../models/search-item-model.component';
import { ShowCardService } from 'src/app/core/services/show-card.service';
import { HttpServiceService } from 'src/app/core/services/http-service.service';
import {
  IItemsYoutube,
  IVideo,
} from '../../models/search-result-model.component';
import { Subscription } from 'rxjs';
import { data } from 'src/app/mocks/cards-list.mock';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss'],
})
export class ListCardsComponent {
  public channels: IVideo[] = [];
  private subscription: Subscription;
  private word: string = '';
  public id: string;
  constructor(private http: HttpServiceService) {}

  public title = 'Hello. Push search for start';
  /*------sorts-----*/
  @Input() searchWord: string;
  @Input() clickDate: boolean;
  @Input() clickView: boolean;
  @Input() isShowCards: boolean = false;

  /*-----HTTP------*/

  ngOnInit(): void {
    this.http.getInfo(this.word).subscribe((data) => {
      this.channels = data;
      console.log(this.channels);
    });
  }
}
