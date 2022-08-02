import * as cardsActions from '../actions/actions';
import { Action, createReducer, on } from '@ngrx/store';
import { CardsState } from '../state';
import { IVideoYoutube } from 'src/app/youtube/models/search-item-model.component';
import { createEntityAdapter } from '@ngrx/entity';

const initialState: CardsState = {
  cardsCustom: [],
  cardsYoutube: [],
  // @ts-ignore
  error: null,
  sortKey: '',
  sortDirection: '',
};

export const dataTableFeatureKey = 'dataTable';

export function sortByName(a: IVideoYoutube, b: IVideoYoutube): number {
  return a.snippet.channelTitle.localeCompare(b.snippet.channelTitle);
}

export function sortByDate(a: IVideoYoutube, b: IVideoYoutube): number {
  return a.snippet.publishedAt.localeCompare(b.snippet.publishedAt);
}

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
  })),

  on(cardsActions.sortKey, (state, { sortKey }) => {
    sortKey = sortKey?.toLowerCase();

    let sortDirection;
    if (sortKey !== state.sortKey) {
      sortDirection = 'asc';
    } else {
      sortDirection = setSortDirection(state.setDirection);
    }
    return {
      ...state,
      sortKey,
      sortDirection,
    };
  })
);

export function cardsReducer(state: CardsState, action: Action): CardsState {
  return reducer(state, action);
}

export function compareCards(a: IVideoYoutube, b: IVideoYoutube) {
  const compare = Number(a.snippet.publishedAt) - Number(b.snippet.publishedAt);
  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else return 0;
}

export function setSortDirection(sortDirection: string): string {
  switch (sortDirection) {
    case 'acs':
      return 'desc';
    case 'desc':
      return '';
    case '':
      return 'asc';
    default:
      return '';
  }
}

export const adapter = createEntityAdapter<IVideoYoutube>({
  sortComparer: compareCards,
});
