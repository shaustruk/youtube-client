import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IUser } from '../model/user-interface';
import { LocalStorageService } from './local-storage.service';



@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  private login = new BehaviorSubject<string>('');
  private password = new BehaviorSubject<string>('');


  constructor(private route: Router,
    private localService: LocalStorageService) {

  }

  authorization(logo: string, pass: string) {
    this.login.next(logo);
    this.password.next(pass);
  }

  isAuth() {
    return this.isLoggedIn;

  }
  logIn() {
    if (this.localService.getItem('login') &&
      this.localService.getItem('password')) {
      this.route.navigate(['/main']);
    }
    else
      if ((this.login.value).length > 0 && (this.password.value).length > 0) {
        this.localService.setItem('login', this.login.value);
        this.localService.setItem('password', this.password.value);
        this.route.navigate(['/main']);
      }


  }
  logOut() {
    this.isLoggedIn.next(false);
    this.route.navigate(['/auth']);
  }

  logoStatus(): Observable<boolean> {
    this.localService.getItem('login') ? this.isLoggedIn.next(true) : this.isLoggedIn.next(false);
    return this.isLoggedIn.asObservable();
  }


}
