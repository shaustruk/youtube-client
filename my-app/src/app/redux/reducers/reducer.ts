import * as cardsActions from '../actions/actions';
import { Action, createReducer, on } from '@ngrx/store';
import { CardsState } from '../state';
import { IVideoYoutube } from 'src/app/youtube/models/search-item-model.component';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

const initialState: CardsState = {
  cardsCustom: [],
  cardsYoutube: [],
  // @ts-ignore
  error: null,
  sortKey: '',
  sortDirection: '',
};

export const reducer = createReducer(
  initialState,
  on(cardsActions.createCard, (state, { card }) => ({
    ...state,
    cardsCustom: [...state.cardsCustom, card],
  })),
  on(cardsActions.getYoutubeCardsSuccessful, (state, { cardsYoutube }) => ({
    ...state,
    cardsYoutube,
  })),
  on(cardsActions.getYoutubeCardsFailed, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function cardsReducer(state: CardsState, action: Action): CardsState {
  return reducer(state, action);
}
