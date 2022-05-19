import * as cardsActions from '../actions/actions';

import { Action, createReducer, on } from '@ngrx/store';
import { CardsState } from '../state';
import { state } from '@angular/animations';
const initialState: CardsState = {
  cardsCustom: [],
  cardsYoutube: [],
  // @ts-ignore
  error: null,
};

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
