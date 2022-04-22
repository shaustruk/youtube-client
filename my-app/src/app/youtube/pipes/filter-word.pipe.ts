import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../models/search-item-model.component';
import { IVideo } from '../models/search-result-model.component';

@Pipe({
  name: 'filterWord',
})
export class FilterWordPipe implements PipeTransform {
  transform(listCards: IVideo[], searchWord: string = ''): IVideo[] {
    if (!searchWord.trim()) {
      searchWord = '';
      return listCards;
    }
    return listCards.filter(
      (card) =>
        card.snippet.title
          .toLocaleLowerCase()
          .indexOf(searchWord.toLocaleLowerCase()) !== -1
    ); //not found);
  }
}
