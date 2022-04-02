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


}
