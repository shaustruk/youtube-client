import { Component, EventEmitter, Output } from '@angular/core';
import { ShowCardService } from '../../services/show-card.service';
import { Observable } from 'rxjs';
import { HttpServiceService } from '../../services/http-service.service';


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

  constructor(private http: HttpServiceService) { }

  // showCard(event: unknown): void {
  //   this.isClickSearch = event as boolean;
  //   this.serviceSearch.showCards(this.isClickSearch);
  // }
  onSearch(event: Event) {
    const valueSearch = (<HTMLInputElement>event.target).value;
    console.log(valueSearch);
    // this.http.getInfo(valueSearch).subscribe((word) => {
    //   word = valueSearch;
    // })
  }


  ngOnInit(): void { }
}





