import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  CountCapital(a: string)
  {
    let count = 0

    for (let i = 0; i < a.length; i++) {
      if (a[i] >= 'A' && a[i] <= 'Z') {
        count++;
      }
    }
    return count;
  }
}
