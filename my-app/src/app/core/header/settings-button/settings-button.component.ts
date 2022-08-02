import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ShowCardService } from '../../services/show-card.service';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export class SettingsButtonComponent {
  private isShowBoxSorts: boolean = false;

  constructor(private service: ShowCardService) {}

  public clickSettingBtn() {
    this.isShowBoxSorts = !this.isShowBoxSorts;
    this.service.showFiltres(this.isShowBoxSorts);
  }
}
