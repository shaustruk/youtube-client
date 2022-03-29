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

@Component({
  selector: 'app-search-result-model',
  templateUrl: './search-result-model.component.html',
  styleUrls: ['./search-result-model.component.scss'],
})
export class SearchResultModelComponent implements OnInit {
  constructor() {
    console.log();
  }

  ngOnInit(): void {
    console.log();
  }
}
