import { Component, HostListener } from '@angular/core';
import { IUser } from './model/user-interface';
import { LoginServiceService } from './services/login-service.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
  private login: string = ('');
  private password: string = ('');

  loginForm: FormGroup;

  ngOnInit(): void {
    /*-----form-----*/
    this.loginForm = new FormGroup({
      "login": new FormControl('', [Validators.required, Validators.email]),
      "password": new FormControl(''),
    })

    /*-----login-----*/
    this.loginForm.controls['login'].valueChanges.subscribe((value) => {
      this.login = value;
      console.log(this.login)
    })
    this.loginForm.controls['password'].valueChanges.subscribe((value) => {
      this.password = value;
      console.log(this.password)
    })


    /*-----status-----*/
    this.subscription = this.loginService.logoStatus().subscribe(status => this.logStatus = status);
    console.log(this.logStatus)
  }

  goToApp() {
    this.loginService.authorization(this.user.login, this.user.password);
    this.loginService.logIn();
    this.loginService.logoStatus();

  }

}
