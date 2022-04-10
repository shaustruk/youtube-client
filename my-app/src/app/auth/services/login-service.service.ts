import { Injectable } from '@angular/core';
import { IUser } from '../model/user-interface';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private isLoggedIn: boolean = false;
  constructor() { }

  isAuth() {
    return new Promise((resolve, reject) => {
      resolve(this.isLoggedIn);
    })
  }
  logIn(user: IUser) {
    this.isLoggedIn = true;
    console.log(this.isLoggedIn)
    return localStorage.setItem(user.login, user.password);


  }

  logOut() {
    this.isLoggedIn = false;
  }
}
