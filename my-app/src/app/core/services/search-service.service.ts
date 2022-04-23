import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchServiceService {
  constructor() {}
  private subject = new Subject<string>();

  sendMessage(message: string) {
    this.subject.next(message);
  }
  onMessage(): Observable<string> {
    return this.subject.asObservable();
  }
}
