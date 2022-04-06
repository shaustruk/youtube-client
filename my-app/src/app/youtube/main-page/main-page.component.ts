import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public isShowCards: boolean;

  public onSearchClicked(isShowCards: boolean) {
    this.isShowCards = isShowCards;
  }

  // @Input() isShowCards: boolean;
  // public isSortsWord: string;
  // public searchWord(isSortsWord: string) {
  //   this.isSortsWord = isSortsWord;
  // }

  // public isSortDate: boolean;
  // public sortDate(isSortDate: boolean) {
  //   this.isSortDate = isSortDate;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
