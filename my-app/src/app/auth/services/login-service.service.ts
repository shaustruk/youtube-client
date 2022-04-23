import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { IUser } from '../model/user-interface';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private isLoggedIn: boolean = false;
  private key: string = '';
  private value: string = '';

  public clickExit$ = new Subject<boolean>();


  public exit(event: boolean): void {
    this.clickExit$.next(event);

  };
  constructor(private route: Router) { }



  isAuth() {
    return this.isLoggedIn;

  }
  logIn() {
    this.isLoggedIn = true;
  }

  logOut() {
    this.isLoggedIn = false;
    this.route.navigate(['/auth'])
  }
}
