import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss']
})
export class SettingsButtonComponent {
  private isShowBoxSorts: boolean = false;

  @Output() clickSetting: EventEmitter<boolean> = new EventEmitter();
  public clickSettingBtn() {
    this.isShowBoxSorts = !this.isShowBoxSorts;
    this.clickSetting.emit(this.isShowBoxSorts);
  }

}

