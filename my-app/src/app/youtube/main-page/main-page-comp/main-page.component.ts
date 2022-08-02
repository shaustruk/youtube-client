import { Component, Input, OnInit } from '@angular/core';
import { ShowCardService } from 'src/app/core/services/show-card.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  public isShowCards: boolean = false;
  public isShowFilters: boolean = false;

  constructor(private serviceSearch: ShowCardService) {}

  ngOnInit(): void {
    this.serviceSearch.clickSearch$.subscribe((value) => {
      this.isShowCards = value;
    });

    this.serviceSearch.clickSetting$.subscribe((isShowFilters) => {
      this.isShowFilters = isShowFilters;
    });
  }
}
