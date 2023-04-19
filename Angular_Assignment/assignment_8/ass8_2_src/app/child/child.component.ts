import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() dataFromParent = ""

  @Output() dataFromChild = new EventEmitter<string>();

  b = "Hello from child component"

  sendData()
  {
    this.dataFromChild.emit(this.b)
  }
}
