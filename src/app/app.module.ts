import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {TaskDetailComponent} from './task-detail.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    TaskDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
