import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvellous';

 toUpperCase()
 {
  this.title = this.title.toUpperCase()
 }

 toLowerCase()
 {
  this.title = this.title.toLowerCase()
 }


}
