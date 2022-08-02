import { Pipe, PipeTransform } from '@angular/core';
import { IVideoYoutube } from '../models/search-item-model.component';
import { IVideo } from '../models/search-result-model.component';

@Pipe({
  name: 'filterViews',
})
export class FilterViewsPipe implements PipeTransform {
  transform(
    listCards: IVideoYoutube[],
    isBtnViewPush: boolean
  ): IVideoYoutube[] {
    if (!isBtnViewPush) {
      return listCards.sort(function (a, b) {
        return Number(b.snippet.title) - Number(a.snippet.title);
      });
    }
    return listCards.sort(function (a, b) {
      return Number(a.snippet.title) - Number(b.snippet.title);
    });
  }
}
