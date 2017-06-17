import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {TaskDetailComponent} from './task-detail.component';
import {HttpModule} from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [
    AppComponent,
    TaskDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
