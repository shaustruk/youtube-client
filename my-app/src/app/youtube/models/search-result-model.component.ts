import { IItem } from './search-item-model.component';

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
    card: IItem[];
  }
}
