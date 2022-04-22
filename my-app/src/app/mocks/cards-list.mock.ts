import * as response from 'mock.json';
import {
  IItem,
  IStatistics,
  IThumbnails,
  IVideoYoutube,
} from '../youtube/models/search-item-model.component';

export const data = response;
console.log(data.items);
export const mockData: IVideoYoutube[] = [...data.items];
