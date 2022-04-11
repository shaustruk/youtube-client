import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IUser } from 'src/app/auth/model/user-interface';
import { items } from 'src/app/mocks/cards-list.mock';
import { IItem } from '../models/search-item-model.component';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss']
})
export class DetailedPageComponent implements OnInit {
  public id: string;
  public titleCard: IItem;
  public listCards = items;
  public info: IItem;
  public idInList: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.titleCard = this.route.snapshot.params['title'];
    this.route.params.subscribe((params: Params) => {
    })
    this.info = this.listCards.filter((el => el.id == this.id))[0];
    this.idInList = this.listCards.indexOf(this.info);
  }


}
