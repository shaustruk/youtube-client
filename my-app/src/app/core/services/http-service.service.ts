import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  mergeMap,
  retry,
} from 'rxjs/operators';
import {
  IItemsYoutube,
  IVideo,
  IVideoResponse,
} from 'src/app/youtube/models/search-result-model.component';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  public ids: string[];
  private errorMessage: string = '';
  private subject = new Subject<string>();

  //private key1: string = 'AIzaSyABKyBQ3_Vv839W4SwpLuU2ms_e9A3g23Q';
  //private key: string = 'AIzaSyBwU5EcFWPF-Cqccmrzv4OHcMpIn-s7DzY';
  private key3: string = 'AIzaSyBAFdaEq03q53cejI6TQPO7W40JSE_oRuE';

  constructor(private HTTPClient: HttpClient) {}

  getInfo(word: string): Observable<IVideo[]> {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${this.key3}&type=video&part=snippet&maxResults=15&q=${word}`;

    return this.HTTPClient.get<IItemsYoutube>(url).pipe(
      retry(3),
      map(({ items }) => {
        this.ids = items
          .filter((item) => item.id.kind === 'youtube#video')
          .map((item) => item.id.videoId);
        return items;
      }),
      mergeMap(() => {
        const urlVideos = `https://www.googleapis.com/youtube/v3/videos?key=${
          this.key3
        }&id=${this.ids.join(',')}&part=snippet,statistics&maxResults=15`;
        return this.HTTPClient.get<IVideoResponse>(urlVideos).pipe(
          map(({ items }) => {
            return items;
          })
        );
      }),
      catchError((err) => {
        this.errorMessage = err.message;
        console.log(err);
        return [];
      })
    );
  }

  getDetailPage(id: string): Observable<IVideo> {
    const urlVideos = `https://www.googleapis.com/youtube/v3/videos?key=${this.key3}&id=${id}&part=snippet,statistics`;
    return this.HTTPClient.get<IVideoResponse>(urlVideos).pipe(
      map(({ items }) => {
        return items[0];
      })
    );
  }
}
