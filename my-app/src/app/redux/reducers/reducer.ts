import * as cardsActions from '../actions/actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { CardsState } from '../state';
import { state } from '@angular/animations';
import { IVideoYoutube } from 'src/app/youtube/models/search-item-model.component';
const initialState: CardsState = {
  cardsCustom: [],
  cardsYoutube: [],
  // @ts-ignore
  error: null,
};

export function sortByName(a: IVideoYoutube, b: IVideoYoutube): number {
  return a.snippet.channelTitle.localeCompare(b.snippet.channelTitle);
}

export function sortByDate(a: IVideoYoutube, b: IVideoYoutube): number {
  return a.snippet.publishedAt.localeCompare(b.snippet.publishedAt);
}

const reducer = createReducer(
  initialState,
  on(cardsActions.createCard, (state, { card }) => ({
    ...state,
    cardsCustom: [...state.cardsCustom, card],
  })),
  on(cardsActions.getYoutubeCardsSuccessful, (state, { cardsYoutube }) => ({
    ...state,
    cardsYoutube,
  })),
  on(cardsActions.getYoutubeCardsFailed, (state, { error }) => {
    console.log(state);
    return { ...state, error };
  })
);

export function cardsReducer(state: CardsState, action: Action): CardsState {
  return reducer(state, action);
}
