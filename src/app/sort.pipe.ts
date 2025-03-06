import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false //disable the caching mechanisim, can have impacts on performace 
})
export class SortPipe implements PipeTransform {

  //default direction is asc
  transform(value: string[] | number[], direction: 'asc' | 'desc' = 'asc') {
    const sorted = [...value]
    sorted.sort((a, b) => { //does not return a new array but sorts the array upon calling
      if (direction === 'asc') {
        return a > b ? 1 : -1
      } else {
        return a < b ? 1 : -1
      }
    });
    return sorted
  }

}
