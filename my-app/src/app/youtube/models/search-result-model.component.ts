import {
  IItem,
  Ilocalized,
  ISnippetYoutube,
  IVideoYoutube,
} from './search-item-model.component';

export interface IPageinfo {
  totalResults: number;
  resultsPerPage: number;
}
export interface IItems {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
    items: IItem[];
  };
}
/*-----HTTP-----*/
export interface IItemsYoutube {
  kind: string;
  etag: string;
  totalResults: number;
  resultsPerPage: number;
  items: IVideoYoutube[];
}

export interface IVideoResponse {
  kind: string;
  etag: string;
  items: IVideo[];
}
export interface IVideo {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippetYoutube;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Ilocalized;
  defaultAudioLanguage: string;
  statistics: {
    viewCount: string;
    likeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}

export interface DataTableState {
  tableData: any[];
  sortDirection: string;
  sortKey: string;
  filterQuery: string;
  filterBy: string[];
}
