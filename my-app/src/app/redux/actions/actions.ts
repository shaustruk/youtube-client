import { createAction, props } from '@ngrx/store';
import { IVideo } from 'src/app/youtube/models/search-result-model.component';
import { ICardCustom } from '../model';

export const getYoutubeCards = createAction(
  '[main page] GET ALL YOUTUBE CARDS'
);

export const getYoutubeCardsSuccessful = createAction(
  ' [CARDS EFFECT] SET FETCHED CARDS ',
  props<{ cardsYoutube: IVideo[] }>()
);

export const getYoutubeCardsFailed = createAction(
  ' [CARDS EFFECT] SET CARDS WAS FAILED',
  props<{ error: Error }>()
);

export const createCard = createAction(
  '[admin page] CREATE CUSTOM CARDS',
  props<{ card: ICardCustom }>()
);
