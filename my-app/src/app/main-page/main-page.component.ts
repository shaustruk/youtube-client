import { Component } from '@angular/core';
import * as response from 'response.json';

const data = response;
const items = data.items;
console.log(items);
let lessons = Array.from(items);
console.log(lessons[0]);
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  public b = lessons[0].statistics.likeCount;



}
