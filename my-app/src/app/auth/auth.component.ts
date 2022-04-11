import { Component, OnInit } from '@angular/core';
import { IUser } from './model/user-interface';
import { LoginServiceService } from './services/login-service.service';
import { FormGroup, NgForm } from '@angular/forms';
import { keyframes } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  styles: [`input.ng-invalid.ng-touched {
     background-color: #bd1d8c4f;
  }`]
})
export class AuthComponent implements OnInit {

  public authData = {
    title: 'Login',
    login: 'login',
    password: 'password'
  }

  public user: IUser = {
    login: '',
    password: ''
  };
  public form: FormGroup;
  constructor(private loginService: LoginServiceService, private router: Router) { }

  submitLogin(myform: NgForm) {
    console.log(myform);
    localStorage.clear();
    // const localSt = localStorage.getItem(this.user.login);
  }

  goToApp() {
    this.loginService.logIn();
    this.router.navigate(['/main']);
  }

  ngOnInit(): void {
  }

}
