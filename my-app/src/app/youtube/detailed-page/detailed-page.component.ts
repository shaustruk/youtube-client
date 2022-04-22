import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IUser } from 'src/app/auth/model/user-interface';
import { HttpServiceService } from 'src/app/core/services/http-service.service';
import { IItem } from '../models/search-item-model.component';
import { IVideo } from '../models/search-result-model.component';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  public id: string;
  public titleCard: IItem;
  public info: IVideo;
  public idInList: number;

  constructor(
    private route: ActivatedRoute,
    private HTTP: HttpServiceService
  ) {}

  ngOnInit(): void {
    /*----mock-----*/
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.HTTP.getDetailPage(this.id).subscribe((data) => {
      this.info = data;
      console.log(this.info);
    });
  }
}
