import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private isShow: boolean;
  private isShowCards: boolean;

  @Output() clickSetting: EventEmitter<boolean> = new EventEmitter();
  @Output() clickSearch: EventEmitter<boolean> = new EventEmitter();

  public onSettingClicked(isShow: boolean) {
    this.isShow = isShow;
    this.clickSetting.emit(isShow);
  }

  public onSearchClicked(isShowCards: boolean) {
    this.isShowCards = isShowCards;
    this.clickSearch.emit(isShowCards);
  }


}
