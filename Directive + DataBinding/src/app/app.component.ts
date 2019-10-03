import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers : number[] = [];
  evenNumbers : number[] = [];

  onIntervalFired(intervaleNumber : number){
    if(intervaleNumber %2 == 0){
      this.evenNumbers.push(intervaleNumber);
    } else{
      this.oddNumbers.push(intervaleNumber);
    }
  }
}
