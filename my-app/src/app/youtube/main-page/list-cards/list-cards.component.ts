import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SearchServiceService } from 'src/app/core/services/search-service.service';
import { Store } from '@ngrx/store';
import { AppState, CardsState } from 'src/app/redux/state';
import { getYoutubeCards } from 'src/app/redux';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss'],
})
export class ListCardsComponent implements OnInit, OnChanges {
  public channelsState: Observable<CardsState>;
  public customCardsState: Observable<CardsState>;
  private subscription: Subscription;
  private subscriptionSort: Subscription;
  private word: string;
  public id: string;
  public clickDate = false;
  public clickView = false;
  public searchString = '';

  constructor(
    private search: SearchServiceService,
    private store: Store<AppState>
  ) {}

  @Input() isShowCards: boolean = false;

  /*-----HTTP------*/

  ngOnInit(): void {
    this.subscriptionSort = this.search.onMessage().subscribe((message) => {
      if (message === 'sortDate') {
        this.clickDate = !this.clickDate;
      } else if (message === 'sortViews') {
        this.clickView = !this.clickView;
      } else this.searchString = message;
    });
    this.subscription = this.search.onMessage().subscribe((data) => {
      this.word = data;
      this.store.dispatch(getYoutubeCards());
      this.channelsState = this.store.select((state) => state.cardsState);
    });
    this.customCardsState = this.store.select((state) => state.cardsState);
  }

  ngOnChanges(): void {}

  // ngOnDestroy() {
  //   // unsubscribe to ensure no memory leaks
  //   this.subscription.unsubscribe();
  // }
}
