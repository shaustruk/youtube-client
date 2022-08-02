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

export const selectDataCards = createFeatureSelector<DataTableState>(
  fromReducer.dataTableFeatureKey
);

export const selectSortDirection = createSelector(
  selectDataCards,
  (state: DataTableState) => state.sortDirection
);

export const selectSortKey = createSelector(
  selectDataCards,
  (state: DataTableState) => state.sortKey
);

export const selectSortedData = createSelector(
  selectCustomCard,
  selectYoutubeCard,
  selectDataCards,
  selectSortKey,
  selectSortDirection,
  (CustomCard, Data)
);
