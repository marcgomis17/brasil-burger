import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zone'
})
export class ZonePipe implements PipeTransform {
  transform(value: [] | any, zone: number) {
    if (zone === 0) {
      return value;
    }
    value.filter((el: any) => {
      el.zone;
    })
    return value.filter((el: any) => el['zone']['id'] === zone);
  }
}
