import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingcomponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { PravalikaComponent } from './pravalika/pravalika.component';
import { JonnalaComponent } from './jonnala/jonnala.component';
import { Branch3Component } from './branch3/branch3.component';
import { Branch4Component } from './branch4/branch4.component';


@NgModule({
  declarations: [
    AppComponent,
    routingcomponent,
    PravalikaComponent,
    JonnalaComponent,
    Branch3Component,
    Branch4Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
