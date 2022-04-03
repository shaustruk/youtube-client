import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../SCSS/null.scss'],
})
export class AppComponent {
  public isShow: boolean;
  public onAClicked(isShow: boolean) {
    this.isShow = isShow;
  }

  public isShowCards: boolean;
  public onClickSearch(isShowCards: boolean) {
    this.isShowCards = isShowCards;
  }

  public wordTitle: string;
  public searchWord(wordTitle: string) {
    this.wordTitle = wordTitle;
    console.log(wordTitle, 'app - title')

  }

  public isBtnViewPush: boolean;
  public sortView(isBtnViewPush: boolean) {
    this.isBtnViewPush = isBtnViewPush;
    console.log(isBtnViewPush, 'app - viewSort')
  }

  public isBtnDatePush: boolean;
  public sortDate(isBtnDatePush: boolean) {
    this.isBtnDatePush = isBtnDatePush;
    console.log(isBtnDatePush, 'app - dateSort')

  }
}
