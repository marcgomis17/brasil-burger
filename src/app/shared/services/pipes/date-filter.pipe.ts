import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {

  transform(value: [], order = "asc") {
    let newArr: [] = [];
    newArr = value.sort((a, b) => {
      return <any>new Date(a['dateCommande']) - <any>new Date(b['dateCommande']);
    });
    if (order === "default") {
      return value;
    }

    if (order === "desc") {
      newArr = value.sort((a, b) => {
        return <any>new Date(b['dateCommande']) - <any>new Date(a['dateCommande']);
      });
    }
    return newArr;
  }
}
