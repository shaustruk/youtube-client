import { Component, OnInit } from '@angular/core';
import { IItem } from '../search-item-model/search-item-model.component';

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
