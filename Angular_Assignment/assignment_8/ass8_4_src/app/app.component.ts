import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment_8';
  name = "dd"

  length(event: any)
  {
    this.name = event.target.value
  }
}