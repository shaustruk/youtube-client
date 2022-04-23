import { Component, EventEmitter, Output } from '@angular/core';
import { ShowCardService } from '../../services/show-card.service';
import { Observable, Subscription } from 'rxjs';
import { HttpServiceService } from '../../services/http-service.service';
import { SearchServiceService } from '../../services/search-service.service';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.scss'],
})
export class SearchAreaComponent {
  public searchAreaLabels = {
    searchPlaceholder: 'What are you want to find out?',
    searchBtn: 'search',
  };

  private message: string = '';

  constructor(
    private http: HttpServiceService,
    private search: SearchServiceService
  ) {}

  subscription: Subscription;
  onSearch(event: Event) {
    const valueSearch = (<HTMLInputElement>event.target).value;
    console.log(valueSearch);
    this.search.sendMessage(valueSearch);
  }

  ngOnInit(): void {
    // send message to subscribers via observable subject
  }
}
