import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuValidatorService {

  constructor() { }

  validate(maxAmount: number, pickedAmount: number) {
    if (maxAmount === pickedAmount) {
      console.log('Max amount');
    }
  }
}
