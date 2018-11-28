import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'locale'
})
@Injectable()
export class LocalePipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
    if (!items) return [];
    return items.filter(it => it[field] == value);
  }

}
