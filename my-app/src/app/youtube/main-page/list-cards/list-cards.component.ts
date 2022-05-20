import { Component, Input, OnInit } from '@angular/core';
import { IItem, IVideoYoutube } from '../../models/search-item-model.component';
import { ShowCardService } from 'src/app/core/services/show-card.service';
import { HttpServiceService } from 'src/app/core/services/http-service.service';
import { IVideo } from '../../models/search-result-model.component';
import { Observable, Subscription } from 'rxjs';
import { SearchServiceService } from 'src/app/core/services/search-service.service';
import { select, Store } from '@ngrx/store';
import { AppState, CardsState } from 'src/app/redux/state';
import { ICardCustom } from 'src/app/redux/model';
import { getYoutubeCards, getYoutubeCardsSuccessful } from 'src/app/redux';
import { selectYoutubeCard } from 'src/app/redux/selectors/selector';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss'],
})
export class ListCardsComponent {
  public channelsState: Observable<CardsState>;
  public customCardsState: Observable<CardsState>;
  private subscription: Subscription;
  private word: string;
  public id: string;

  constructor(
    private search: SearchServiceService,
    private store: Store<AppState>
  ) {}

  public title = 'Hello. Push search for start';
  /*------sorts-----*/
  @Input() searchWord: string;
  @Input() clickDate: boolean;
  @Input() clickView: boolean;
  @Input() isShowCards: boolean = false;

  /*-----HTTP------*/

  ngOnInit(): void {
    this.subscription = this.search.onMessage().subscribe((data) => {
      this.word = data;
      this.store.dispatch(getYoutubeCards());
      this.channelsState = this.store.select((state) => state.cardsState);
    });
    this.customCardsState = this.store.select((state) => state.cardsState);
  }
}
