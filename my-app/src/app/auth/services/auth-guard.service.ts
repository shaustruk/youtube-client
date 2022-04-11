import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private auth: LoginServiceService) {

  }
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    // return this.auth.isAuth().then((isLoggedIn: unknown) => {
    //   if (isLoggedIn) {
    //     return true;
    //   }
    //   else {
    //     return false;
    //   }
    // });
    if (this.auth.isAuth() === true) {
      return true;
    }
    else return false;


  }

}
