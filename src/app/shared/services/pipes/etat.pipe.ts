import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'etat'
})
export class EtatPipe implements PipeTransform {

  transform(value: [] | any, etat = "En cours") {
    return value.filter((el: any) => el['etat'] === etat);
  }
}
