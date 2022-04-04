import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.scss'],
})
export class SearchAreaComponent implements OnInit {
  public search = 'What are you want to find out?';

  public btn = 'search';

  public isVisibleCards: boolean = false;

  constructor() {
    console.log();
  }

  ngOnInit(): void {
    console.log();
  }

  showCards() {
    this.isVisibleCards = !this.isVisibleCards;
    this.clickSearch.emit(this.isVisibleCards);
  }
  @Output() clickSearch: EventEmitter<boolean> = new EventEmitter();

}
