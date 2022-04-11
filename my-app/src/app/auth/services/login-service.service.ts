import { Injectable } from '@angular/core';
import { IUser } from '../model/user-interface';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private isLoggedIn: boolean = false;

  constructor() { }

  isAuth() {
    return this.isLoggedIn;

  }
  logIn() {
    this.isLoggedIn = true;
    console.log(this.isLoggedIn)
    // return localStorage.setItem(user.login, user.password);
  }

  logOut() {
    this.isLoggedIn = false;
  }
}
