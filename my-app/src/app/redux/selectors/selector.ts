import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CustomCard } from 'src/app/youtube/models/custom-cards';
import { IVideoYoutube } from 'src/app/youtube/models/search-item-model.component';
import { DataTableState } from 'src/app/youtube/models/search-result-model.component';
import * as fromReducer from '../reducers/reducer';
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
