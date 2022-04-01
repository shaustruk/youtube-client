import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isShow: boolean;

  @Output() clickChange: EventEmitter<boolean> = new EventEmitter();

  public onAClicked(isShow: boolean) {
    this.isShow = isShow;
    console.log(isShow, 'header');
    this.clickChange.emit(isShow);
  }


}
