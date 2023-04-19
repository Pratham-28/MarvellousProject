import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  firstNumber = 0
  secondNumber = 0

  resultOfAddition = 0
  resultOfSubtraction = 0

  constructor(private arithmetic: ArithmeticService) {}

  callAddService()
  {
    this.resultOfAddition = this.arithmetic.add(this.firstNumber,this.secondNumber)
  }

  callSubtractService()
  {
    this.resultOfSubtraction = this.arithmetic.sub(this.firstNumber,this.secondNumber)
  }

}
