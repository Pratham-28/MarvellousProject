import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment_8';

  a = "Hello from parent component"

  b :string = ""

  getMessage($event : string)
  {
    this.b = $event
  }
}
