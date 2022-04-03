import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../header-components/search-item-model/search-item-model.component';

@Pipe({
  name: 'filterDates'
})
export class FilterDatesPipe implements PipeTransform {

  transform(listObj: IItem[], isBtnDatePush: boolean): IItem[] {
    if (!isBtnDatePush) {
      return listObj.sort(function (a, b) { return (Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt)) });

    }
    return listObj.sort(function (a, b) { return (Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt)) });

  };


}
