import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {
  catchError,
  from,
  map,
  Observable,
  of,
  Subscription,
  switchMap,
} from 'rxjs';
import { HttpServiceService } from 'src/app/core/services/http-service.service';
import { SearchServiceService } from 'src/app/core/services/search-service.service';
import {
  getYoutubeCards,
  getYoutubeCardsFailed,
  getYoutubeCardsSuccessful,
} from '../actions/actions';

@Injectable({ providedIn: 'any' })
export class cardsEffects {
  private subscription: Subscription;
  private word: string = '';

  constructor(
    private actions$: Actions,
    private serviceHTTP: HttpServiceService,
    private search: SearchServiceService
  ) {
    this.subscription = this.search.onMessage().subscribe((data) => {
      this.word = data;
      console.log(this.word);
    });
  }
  loadCardsYoutube$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getYoutubeCards),
      switchMap(() =>
        from(this.serviceHTTP.getInfo(this.word)).pipe(
          map((cardsYoutube) =>
            getYoutubeCardsSuccessful({ cardsYoutube: cardsYoutube })
          ),
          catchError((error) => of(getYoutubeCardsFailed({ error })))
        )
      )
    )
  );
}
