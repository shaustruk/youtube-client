import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchServiceService } from 'src/app/core/services/search-service.service';

@Component({
  selector: 'app-sorts-search-area',
  templateUrl: './sorts-search-area.component.html',
  styleUrls: ['./sorts-search-area.component.scss'],
})
export class SortsSearchAreaComponent {
  constructor(private messageService: SearchServiceService) {}

  @Input() isShowSort: boolean;
  public sortesTitle = {
    titleSort: 'Sorting by:',
    itemsBtn: ['date', 'count of views'],
    itemSearch: 'by word or sentance',
  };
  public searchTitle: string = '';
  public isBtnDatePush: boolean = false;
  public isBtnViewPush: boolean = false;

  /*--------sortDate------------*/

  onDateSortBtn() {
    this.isBtnDatePush = !this.isBtnDatePush;
    this.messageService.sendMessage('sortDate');
  }

  /*--------sortView------------*/

  onViewSortBtn() {
    this.isBtnViewPush = !this.isBtnViewPush;
    this.messageService.sendMessage('sortViews');
  }

  /*--------filterTitle------------*/

  onSearchCard(event: Event) {
    this.searchTitle = (<HTMLInputElement>event.target).value;
    this.messageService.sendMessage(this.searchTitle);
  }
}
