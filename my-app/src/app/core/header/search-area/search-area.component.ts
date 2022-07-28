import { Component, EventEmitter, Output } from '@angular/core';
import { ShowCardService } from '../../services/show-card.service';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  Subscription,
} from 'rxjs';
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

  private subjectKeyUp = new BehaviorSubject<string>('');

  private readonly newProperty = this.subjectKeyUp;

  constructor(
    private http: HttpServiceService,
    private search: SearchServiceService
  ) {}

  subscription: Subscription;

  ngOnInit(): void {
    this.subjectKeyUp
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((word) => {
        this.search.sendMessage(word);
      });
  }

  onSearch(event: Event) {
    const valueSearch = (<HTMLInputElement>event.target).value;
    this.subjectKeyUp.next(valueSearch);
  }
}
