import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  username: string;
  isDisable=true;
  constructor() { }

  ngOnInit() {
  }

onClickDisable(){
 this.username = "";
  this.isDisable = true;
}

onInput(event : Event){
  if((<HTMLInputElement>event.target).value == ""){
    this.isDisable=true;
  } else{
    this.isDisable = false;
  }
}
}
