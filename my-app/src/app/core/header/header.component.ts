import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  public isShowCards: boolean = false;
  public showCards(isShowCards: boolean) {
    this.isShowCards = isShowCards;
  }
  constructor() { }


}



