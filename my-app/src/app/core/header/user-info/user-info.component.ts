import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginServiceService } from 'src/app/auth/services/login-service.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent {
  public userStatus: boolean;
  private subscription: Subscription;
  constructor(private logoService: LoginServiceService) { }

  ngOnInit(): void {
    this.subscription = this.logoService.logoStatus().subscribe(status => this.userStatus = status);

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
