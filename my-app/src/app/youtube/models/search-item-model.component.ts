import { Component } from '@angular/core';

export interface IIMg {
  url: string,
  width: number,
  height: number
}

export interface IThumbnails {
  default: IIMg,
  medium: IIMg,
  high: IIMg,
  standard: IIMg,
  maxres: IIMg
}
export interface Ilocalized {
  title: string,
  description: string
}

export interface ISnippet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: IThumbnails,
  channelTitle: string,
  tags: string[],
  categoryId: string,
  liveBroadcastContent: string,
  localized: Ilocalized
  defaultAudioLanguage: string
}

export interface IStatistics {
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  favoriteCount: string,
  commentCount: string
}

export interface IItem {
  kind: string,
  etag: string,
  id: string,
  snippet: ISnippet,
  statistics: IStatistics,
}

