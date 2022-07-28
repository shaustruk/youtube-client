import { Component } from '@angular/core';

export interface IIMg {
  url: string;
  width: number;
  height: number;
}

export interface IThumbnails {
  default: IIMg;
  medium: IIMg;
  high: IIMg;
}
export interface Ilocalized {
  title: string;
  description: string;
}

export interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Ilocalized;
  defaultAudioLanguage: string;
}

export interface IStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface IItem {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
  statistics: IStatistics;
}

/*-----YOutube-----*/

export interface ISnippetYoutube {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  liveBroadcastContent: string;
  publishTime: string;
  channelTitle: string;
}
export interface IVideoYoutube {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: ISnippetYoutube;
}
