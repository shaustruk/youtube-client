import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isShow: boolean;
  public isShowCards: boolean;

  public onAClicked(isShow: boolean) {
    this.isShow = isShow;
    this.clickChange.emit(isShow);
  }
  @Output() clickChange: EventEmitter<boolean> = new EventEmitter();

  public onSearchClicked(isShowCards: boolean) {
    this.isShowCards = isShowCards;
    this.clickSearch.emit(isShowCards);
  }
  @Output() clickSearch: EventEmitter<boolean> = new EventEmitter();

}
