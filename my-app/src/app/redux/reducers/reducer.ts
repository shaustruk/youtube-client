import { createAction, props } from '@ngrx/store';
import { ICard } from '../model';

export const getCards = createAction('[main page] GET ALL CUSTOM CARDS');

export const createCard = createAction(
  '[admin page] CREATE CUSTOM CARDS',
  props<{ card: ICard }>()
);
