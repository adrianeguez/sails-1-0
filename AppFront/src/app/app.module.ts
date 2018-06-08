import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {SailsModule} from 'angular2-sails';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SailsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
