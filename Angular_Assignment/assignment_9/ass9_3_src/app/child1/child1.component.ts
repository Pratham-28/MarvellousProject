import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  constructor( public variable: NumberService, public variable1: StringService) {}

  inputFromUser: number = 0
  inputFromUser1 = ""
  isButtonClick = false
  message = ""
  count = 0

  chkPrimeNumber()
  {
    this.isButtonClick = true
    this.message = this.variable.ChkPrime(this.inputFromUser) 
  }

  countCaptialLetters()
  {
    this.isButtonClick = true
    this.count = this.variable1.CountCapital(this.inputFromUser1) 
  }

}
