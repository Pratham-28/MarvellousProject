import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  constructor( public variable: NumberService) {}

  inputFromUser = 0
  isButtonClick = false
  message = ""

  chkPrimeNumber()
  {
    this.isButtonClick = true
    this.message = this.variable.ChkPrime(this.inputFromUser) 
  }



}
