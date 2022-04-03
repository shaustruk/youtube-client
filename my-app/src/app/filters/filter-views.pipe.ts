import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../header-components/search-item-model/search-item-model.component';

@Pipe({
  name: 'filterViews'
})
export class FilterViewsPipe implements PipeTransform {

  transform(listObj: IItem[], isBtnViewPush: boolean): IItem[] {
    if (!isBtnViewPush) {
      return listObj.sort(function (a, b) { return (Number(b.statistics.viewCount) - Number(a.statistics.viewCount)) });

    }
    return listObj.sort(function (a, b) { return (Number(a.statistics.viewCount) - Number(b.statistics.viewCount)) });

  };

}




