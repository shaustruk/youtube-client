import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss']
})
export class SettingsButtonComponent {
  public isShowBoxSorts: boolean = false;
  @Output() clickChange: EventEmitter<boolean> = new EventEmitter();
  public clickMe() {
    console.log(this.isShowBoxSorts);
    this.isShowBoxSorts = !this.isShowBoxSorts;
    this.clickChange.emit(this.isShowBoxSorts);
  }

}

