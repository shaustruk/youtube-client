import { Component, HostListener } from '@angular/core';
import { IUser } from './model/user-interface';
import { LoginServiceService } from './services/login-service.service';
import { FormGroup, NgForm } from '@angular/forms';
import { keyframes } from '@angular/animations';
import { Router } from '@angular/router';
import { LocalStorageService } from './services/local-storage.service';

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


  public form: FormGroup;
  constructor(private loginService: LoginServiceService,
    private router: Router,
    private storageService: LocalStorageService) {

  }
  ngOnOnit(): void { }


  goToApp() {
    if (this.storageService.getItem('login') &&
      this.storageService.getItem('password')) {
      this.loginService.logIn();
      this.router.navigate(['/main']);
    }
    else {
      if ((this.user.login !== '' && this.user.password !== '')) {
        this.storageService.setItem('login', this.user.login);
        this.storageService.setItem('password', this.user.password);
        this.loginService.logIn();
        this.router.navigate(['/main']);
      }
    }
  }

}
