import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <p class= "csseffect">Marvellous Infosystems</p>

     <input type="text" placeholder="Enter your name" required>
  `,
  styles: [`
    .csseffect
    {
      color: blue;
    }
    .csseffect1
    {
      color: red;
    }
  `]
})
export class AppComponent {
  title = 'assignment_6';
}
