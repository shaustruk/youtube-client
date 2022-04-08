import { Component, EventEmitter, Output } from '@angular/core';
import { ShowCardService } from '../services/show-card.service';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.scss'],
})
export class SearchAreaComponent {

  public searchAreaLabels = {
    searchPlaceholder: 'What are you want to find out?',
    searchBtn: 'search'
  };
  private isClickSearch: boolean = false;

  // @Output() clickSearch: EventEmitter<boolean> = new EventEmitter();
  constructor(private serviceSearch: ShowCardService) { }
  showCard(event: unknown): void {
    this.isClickSearch = event as boolean;
    this.serviceSearch.showCards(this.isClickSearch);
  }

}





