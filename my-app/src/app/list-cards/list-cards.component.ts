import { Component, Input, OnInit } from '@angular/core';
import { IItem } from '../header-components/search-item-model/search-item-model.component';
import { items, objStatistics, objURL } from '../mocks/cards-list.mock';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent implements OnInit {
  public title = 'Hello. Push search for start';

  public listObj: IItem[] = items;

  public datePulication: number;

  public today: number = Date.now();
  public oneMonthMiliSec: number = 30 * 24 * 60 * 60 * 1000;
  public sixMonthMiliSec: number = 30 * 24 * 60 * 60 * 1000 * 6;
  public sevenDaysMilisec: number = 7 * 24 * 60 * 60 * 1000;
  public isdateLessMonth: boolean = true;
  public isdateLessSevenDays: boolean = true;
  public isDateMoreSixMonth: boolean = true;
  // objUrl = objURL;
  // objStatist = objStatistics;
  @Input() isShowCards: boolean;
  @Input() wordTitle: string;
  constructor() {
    this.listObj.forEach(el => {
      this.datePulication = Date.parse(el.snippet.publishedAt);
      this.isdateLessSevenDays = (this.today - this.datePulication) <= this.sevenDaysMilisec;
      this.isdateLessMonth = (this.today - this.datePulication) <= this.oneMonthMiliSec;
      this.isDateMoreSixMonth = (this.today - this.datePulication) >= this.sixMonthMiliSec;

      console.log(this.isdateLessMonth, this.isdateLessSevenDays, this.isDateMoreSixMonth, this.datePulication, this.today)
    })

  }

  ngOnInit(): void {
    console.log(this.wordTitle, 'list');
  };


}
console.log('list');

