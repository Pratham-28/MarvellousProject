import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  constructor( public variable: StringService) {}

  inputFromUser = ""
  isButtonClick = false
  count = 0

  countCaptialLetters()
  {
    this.isButtonClick = true
    this.count = this.variable.CountCapital(this.inputFromUser) 
  }

}
