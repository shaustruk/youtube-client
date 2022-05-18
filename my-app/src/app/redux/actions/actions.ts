import { createAction, props } from '@ngrx/store';
import { ICard } from '../model';

export const getCustomCards = createAction('[main page] GET ALL CUSTOM CARDS');

export const getYoutubeCards = createAction(
  '[main page] GET ALL YOUTUBE CARDS'
);

export const createCard = createAction(
  '[admin page] CREATE CUSTOM CARDS',
  props<{ card: ICard }>()
);
