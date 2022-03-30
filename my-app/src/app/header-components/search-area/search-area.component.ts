import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.scss'],
})
export class SearchAreaComponent implements OnInit {
  public search = 'What are you want to find out?';

  public btn = 'search';

  constructor() {
    console.log();
  }

  ngOnInit(): void {
    console.log();
  }
}
