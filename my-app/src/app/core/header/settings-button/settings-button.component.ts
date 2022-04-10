import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ShowCardService } from '../../services/show-card.service';


@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss']
})
export class SettingsButtonComponent {
  private isShowBoxSorts: boolean = false;


  public clickSettingBtn(value: unknown) {
    this.isShowBoxSorts = value as boolean ? !this.isShowBoxSorts : value as boolean;
    // this.isShowBoxSorts = !this.isShowBoxSorts;
    this.service.showFiltres(this.isShowBoxSorts);
  }


  constructor(private service: ShowCardService) {

  }

}

