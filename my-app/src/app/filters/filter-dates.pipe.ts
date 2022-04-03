import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDates'
})
export class FilterDatesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
