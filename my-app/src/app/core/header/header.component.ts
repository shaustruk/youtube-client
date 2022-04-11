import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/auth/services/login-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  public isShowCards: boolean = false;
  public showCards(isShowCards: boolean) {
    this.isShowCards = isShowCards;
    console.log(isShowCards);
  }

  constructor(private auth: LoginServiceService) { }
  exitFromApp(status: string) {
    this.auth.logOut();
  }

}



