import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../SCSS/null.scss'],
})
export class AppComponent {
  private isShowCards: boolean;
  private isShowSettingSorts: boolean;


  constructor() { }

  ngOnInit(): void { }

}
