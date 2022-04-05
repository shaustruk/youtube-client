import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../header-components/search-item-model/search-item-model.component';

@Pipe({
  name: 'filterWord'
})
export class FilterWordPipe implements PipeTransform {

  transform(listCards: IItem[], searchWord: string = ''): IItem[] {
    if (!searchWord.trim()) {
      return listCards;
    }
    return listCards.filter(card => card.snippet.title.toLocaleLowerCase().indexOf(searchWord.toLocaleLowerCase()) !== -1) //not found);
  }

}
