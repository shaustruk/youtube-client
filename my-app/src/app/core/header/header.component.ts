import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/auth/services/local-storage.service';
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

  }

  constructor(private auth: LoginServiceService,
    private storageservice: LocalStorageService) { }

  exitFromApp(status: string) {
    this.storageservice.clear();
    this.auth.logOut();
  }

}



