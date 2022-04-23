import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sorts-search-area',
  templateUrl: './sorts-search-area.component.html',
  styleUrls: ['./sorts-search-area.component.scss'],
})
export class SortsSearchAreaComponent {
  @Input() isShowSort: boolean;
  public sortesTitle = {
    titleSort: 'Sorting by:',
    itemsBtn: ['date', 'count of views'],
    itemSearch: 'by word or sentance',
  }


  /*--------filterTitle------------*/
  public searchTitle: string = '';
  onSearchCard(event: Event) {
    this.searchTitle = (<HTMLInputElement>event.target).value;
    this.addSearchInputWord.emit(this.searchTitle);
  }
  @Output() addSearchInputWord:
    EventEmitter<string> = new EventEmitter();

  /*--------sortDate------------*/
  public isBtnDatePush: boolean = false;
  onDateSortBtn() {
    this.isBtnDatePush = !this.isBtnDatePush;
    this.datePush.emit(this.isBtnDatePush);
  }
  @Output() datePush:
    EventEmitter<boolean> = new EventEmitter();

  /*--------sortView------------*/
  public isBtnViewPush: boolean = false;
  onViewSortBtn() {
    this.isBtnViewPush = !this.isBtnViewPush;
    this.viewPush.emit(this.isBtnViewPush);
  }
  @Output() viewPush:
    EventEmitter<boolean> = new EventEmitter();


}
