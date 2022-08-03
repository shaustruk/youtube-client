import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocalStorageService } from 'src/app/auth/services/local-storage.service';
import { LoginServiceService } from 'src/app/auth/services/login-service.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent {
  public userStatus: boolean = false;
  private subscription: Subscription;
  constructor(
    private auth: LoginServiceService,
    private storageservice: LocalStorageService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.auth
      .logoStatus()
      .subscribe((status) => (this.userStatus = status));
  }

  exitFromApp(status: string) {
    this.storageservice.clear();
    this.auth.logOut();
  }

  goToAdminPage() {
    this.route.navigate(['/admin']);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
