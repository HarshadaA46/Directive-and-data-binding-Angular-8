import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-directive',
  templateUrl: './practice-directive.component.html',
  styleUrls: ['./practice-directive.component.css']
})
export class PracticeDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  secretPassword = "tuna";
  factor = true;
  logger = [1];
  i: number = 1;


  toggle(){
    if(this.secretPassword== "tuna"){
      console.log("in");
      this.secretPassword = "salmon";
      this.factor = false;
    } else{
      this.secretPassword = "tuna";
      this.factor = true;
    }
    this.i = this.i++;
    this.logger.push(this.i+1);
  }
}
