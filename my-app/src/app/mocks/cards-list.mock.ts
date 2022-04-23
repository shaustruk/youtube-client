import * as response from 'response.json';
import { IItem, IStatistics, IThumbnails } from '../youtube/models/search-item-model.component';
import { IItems } from '../youtube/models/search-result-model.component';

const data = response;
export const items: IItem[] = [...data.items];

