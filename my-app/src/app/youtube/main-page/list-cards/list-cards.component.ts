import { Component, Input, OnInit } from '@angular/core';
import { IItem, IVideoYoutube } from '../../models/search-item-model.component';
import { items } from '../../../mocks/cards-list.mock';
import { ShowCardService } from 'src/app/core/services/show-card.service';
import { HttpServiceService } from 'src/app/core/services/http-service.service';
import { IItemsYoutube } from '../../models/search-result-model.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss'],

})
export class ListCardsComponent {
  public channels: IVideoYoutube[] = [];
  private subscription: Subscription;
  private word: string = '';
  constructor(private http: HttpServiceService) { }

  // public listCards: IItem[] = items;
  public title = 'Hello. Push search for start';
  /*------sorts-----*/
  @Input() searchWord: string;
  @Input() clickDate: boolean;
  @Input() clickView: boolean;
  @Input() isShowCards: boolean = false;

  /*-----HTTP------*/

  ngOnInit(): void {
    this.subscription = this.http.onWord().subscribe(word => {
      this.word = word;
      console.log(this.word)
    })
    // this.http.getInfo(this.word).subscribe((data) => {
    //   this.channels = data.items;
    //   console.log(this.channels);
    // })
  }


}
