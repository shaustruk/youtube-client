import { createSelector } from '@ngrx/store';
import { AppState, CardsState } from '../state';

const selectCards = (state: AppState) => state.cardsState;

export const selectYoutubeCard = createSelector(
  selectCards,
  (state: CardsState) => state.cardsYoutube
);

export const selectCustomCard = createSelector(
  selectCards,
  (state: CardsState) => state.cardsCustom
);
console.log(selectCustomCard, selectYoutubeCard);
