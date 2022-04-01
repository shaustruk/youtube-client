import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sorts-search-area',
  templateUrl: './sorts-search-area.component.html',
  styleUrls: ['./sorts-search-area.component.scss'],
})
export class SortsSearchAreaComponent {
  @Input() isShowSort: boolean;
  public titleSort = 'Sorting by:';
  public itemsBtn = ['date', 'count of views'];
  public itemSearch = 'by word or sentance';


}
