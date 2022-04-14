import { Component, Input, OnInit } from '@angular/core';
import { ShowCardService } from 'src/app/core/services/show-card.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {

  public searchWord: string = '';
  public isSortDate: boolean;
  public isSortViews: boolean;
  // private _isShowCards: boolean = false;
  public isShowCards: boolean = false;
  public isShowFilters: boolean = false;
  public searchInputWord(searchWord: string) {
    this.searchWord = searchWord;
  }

  public onDatePush(isSortDate: boolean) {
    this.isSortDate = isSortDate;
  }

  public onViewPush(isSortViews: boolean) {
    this.isSortViews = isSortViews;
  }

  // public get isShowCards() {
  //   return this._isShowCards;
  // }
  constructor(private serviceSearch: ShowCardService) { }
  ngOnInit(): void {
    this.serviceSearch.clickSearch$.subscribe(value => {
      this.isShowCards = value;
    });

    this.serviceSearch.clickSetting$.subscribe(value => {
      this.isShowFilters = value;
    })

  }

}




