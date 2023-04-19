import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() dataFromChild = new EventEmitter<string>();

  sendDataFromChild(value: string)
  {
    this.dataFromChild.emit(value)
  }
}
