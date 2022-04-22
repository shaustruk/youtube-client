import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../models/search-item-model.component';
import { IVideo } from '../models/search-result-model.component';

@Pipe({
  name: 'filterViews',
})
export class FilterViewsPipe implements PipeTransform {
  transform(listCards: IVideo[], isBtnViewPush: boolean): IVideo[] {
    if (!isBtnViewPush) {
      return listCards.sort(function (a, b) {
        return Number(b.statistics.viewCount) - Number(a.statistics.viewCount);
      });
    }
    return listCards.sort(function (a, b) {
      return Number(a.statistics.viewCount) - Number(b.statistics.viewCount);
    });
  }
}
