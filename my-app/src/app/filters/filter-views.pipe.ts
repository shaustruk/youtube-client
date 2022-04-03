import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterViews'
})
export class FilterViewsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
