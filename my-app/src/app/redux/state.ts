import { IVideo } from '../youtube/models/search-result-model.component';
import { ICardCustom } from './model';

export interface CardsState {
  cardsCustom: ICardCustom[];
  cardsYoutube: IVideo[];
  error: Error;
}

export interface AppState {
  cardsState: CardsState;
}
