import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment_7';

  public variable = "Marvellous Infosystems"

  display()
  {
    if(this.variable == "Marvellous Infosystems"){
      this.variable = "Educating for better toomorrow"
    }
    else{
      this.variable = "Marvellous Infosystems"
    }
    
  }
}
