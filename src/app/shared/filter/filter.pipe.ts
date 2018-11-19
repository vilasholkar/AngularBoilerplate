import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], field: any, filterBy: string): any[] {
    if (!items) {
      return [];
    }
    if (!filterBy || filterBy === '') {
      return items;
    }
    filterBy = filterBy.toLowerCase();
    return items.filter(it => {
      return it[field].toLowerCase().includes(filterBy);
    });
  }
}
