import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: [], searchText: string) {
    return value.filter((el: any) => el['numeroCommande'].toLowerCase().includes(searchText.toLowerCase()));
  }
}
