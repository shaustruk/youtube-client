import { Component, OnInit } from '@angular/core';

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
  tags: [index: string],
  categoryId: number,
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
  statisticks: IStatistics,



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

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('main');
  }

}
