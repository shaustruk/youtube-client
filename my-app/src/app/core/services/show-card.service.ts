import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ShowCardService {
  public clickSearch$ = new Subject<boolean>();
  public clickSetting$ = new Subject<boolean>();

  public showCards(event: boolean): void {
    this.clickSearch$.next(event);
  }

  public showFiltres(event: boolean): void {
    this.clickSetting$.next(event);
  }
}
