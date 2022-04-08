import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {


  public authData = {
    title: 'Login',
    login: 'login',
    password: 'password'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
