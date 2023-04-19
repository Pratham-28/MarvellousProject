import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  ChkPrime(a: number)
  {
    let count = 0

    for(let i=1; i<= a; i++)
    {
      if(a%i==0)
      {
        count++
      }
    }

    if(count ==2)
    {
      return "It is a prime number"
    }

    return "It is not a prime number"
  }
}
