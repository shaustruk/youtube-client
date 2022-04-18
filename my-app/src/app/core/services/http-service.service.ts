import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/auth/model/user-interface';
import { IItems } from 'src/app/youtube/models/search-result-model.component';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private key: string = 'AIzaSyABKyBQ3_Vv839W4SwpLuU2ms_e9A3g23Q';
  constructor(private HTTPClient: HttpClient) { }
  getInfo(word: string): Observable<IItems> {
    const url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.key + '&type=video&part=snippet&maxResults=15&q=' + word + '';
    return this.HTTPClient.get<IItems>(url);
  }
}
