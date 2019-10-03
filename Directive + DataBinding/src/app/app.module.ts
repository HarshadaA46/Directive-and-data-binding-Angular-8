import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import {FormsModule} from '@angular/forms';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PracticeDirectiveComponent } from './practice-directive/practice-directive.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component'

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SuccessComponent,
    DataBindingComponent,
    PracticeDirectiveComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
