import * as response from 'response.json';
import { IIMg, IItem, IStatistics, IThumbnails } from '../header-components/search-item-model/search-item-model.component';
import { IItems } from '../header-components/search-result-model/search-result-model.component';

const data = response;
const items: IItem[] = data.items;
export const listCards: IItem[] = [];


export const objURL: Array<IThumbnails> = [];
export const objStatistics: Array<IStatistics> = [];
items.forEach(el => {
  listCards.push(el);
  objURL.push(el.snippet.thumbnails);
  objStatistics.push(el.statistics);
})

