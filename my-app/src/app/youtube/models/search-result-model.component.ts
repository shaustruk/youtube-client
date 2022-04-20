import { IItem, IVideoYoutube } from './search-item-model.component';

export interface IPageinfo {
  totalResults: number,
  resultsPerPage: number
}
export interface IItems {
  kind: string,
  etag: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
    items: IItem[];
  }
}
/*-----HTTP-----*/
export interface IItemsYoutube {
  kind: string,
  etag: string,
  totalResults: number,
  resultsPerPage: number
  items: IVideoYoutube[];
}
