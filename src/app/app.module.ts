import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {TaskDetailComponent} from './task-detail.component';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {VersionComponent} from './version/version.component';
@NgModule({
  imports:      [ BrowserModule, HttpModule, AppRoutingModule],
  declarations: [
    AppComponent,
    TaskDetailComponent,
    VersionComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
