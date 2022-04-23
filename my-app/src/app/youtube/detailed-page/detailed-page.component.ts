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
  public titleCard: string = '';
  public info: IVideo;
  public titleChannel: string = '';
  public img: string;
  public date: string;
  public description: string = '';
  public viewCount: string = '';
  public likeCount: string = '';
  public commentCount: string = '';
  constructor(
    private route: ActivatedRoute,
    private HTTP: HttpServiceService
  ) {}

  ngOnInit(): void {
    /*----mock-----*/
    this.id = this.route.snapshot.params['id'];
    this.HTTP.getDetailPage(this.id).subscribe((data) => {
      this.info = data;
      this.img = this.info.snippet.thumbnails.high.url;
      this.titleChannel = this.info.snippet.channelTitle;
      this.titleCard = this.info.snippet.title;
      this.date = this.info.snippet.publishedAt;
      this.description = this.info.snippet.description;
      this.viewCount = this.info.statistics.viewCount;
      this.likeCount = this.info.statistics.viewCount;
      this.commentCount = this.info.statistics.viewCount;
    });
  }
}
