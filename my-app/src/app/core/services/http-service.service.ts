import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IUser } from 'src/app/auth/model/user-interface';
import { IItems, IItemsYoutube } from 'src/app/youtube/models/search-result-model.component';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private subject = new Subject<any>();

  private key: string = 'AIzaSyABKyBQ3_Vv839W4SwpLuU2ms_e9A3g23Q';

  constructor(private HTTPClient: HttpClient) { }

  getInfo(word: string): Observable<IItemsYoutube> {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${this.key}&type=video&part=snippet&maxResults=15&q=angular=${word}`;

    return this.HTTPClient.get<IItemsYoutube>(url);
  }

  sendWord(word: string) {
    this.subject.next(word);
  }

  onWord(): Observable<any> {
    return this.subject.asObservable();
  }
}
