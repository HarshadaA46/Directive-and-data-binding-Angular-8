import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  warning = "You have clicked on warning button";
  val = true;
  public func():void {
     this.val=false;
    
  }

}
