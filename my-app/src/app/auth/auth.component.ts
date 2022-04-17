import { Component, HostListener } from '@angular/core';
import { IUser } from './model/user-interface';
import { LoginServiceService } from './services/login-service.service';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from './services/local-storage.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  styles: [`input.ng-invalid.ng-touched {
     background-color: #bd1d8c4f;
  }`]
})
export class AuthComponent {

  public authLabel = {
    title: 'Login',
    login: 'login',
    password: 'password'
  }

  public user: IUser = {
    login: '',
    password: ''
  };

  public logStatus: boolean = false;
  private subscription: Subscription;

  public form: FormGroup;

  constructor(private loginService: LoginServiceService,
    private router: Router,
    private storageService: LocalStorageService) {

  }

  private login = new BehaviorSubject<string>('');
  private password = new BehaviorSubject<string>('');

  ngOnInit(): void {
    this.login.next(this.user.login);
    this.password.next(this.user.password);

  }

  goToApp() {
    this.loginService.authorization(this.user.login, this.user.password);
    this.loginService.logIn();
    this.loginService.logoStatus();

  }

}
