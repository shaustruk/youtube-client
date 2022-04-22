import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../models/search-item-model.component';
import { IVideo } from '../models/search-result-model.component';

@Pipe({
  name: 'filterDates',
})
export class FilterDatesPipe implements PipeTransform {
  transform(listCards: IVideo[], isBtnDatePush: boolean): IVideo[] {
    if (!isBtnDatePush) {
      return listCards.sort(function (a, b) {
        return (
          Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt)
        );
      });
    }
    return listCards.sort(function (a, b) {
      return (
        Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt)
      );
    });
  }
}
