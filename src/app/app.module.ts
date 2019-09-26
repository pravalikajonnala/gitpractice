import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingcomponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { PravalikaComponent } from './pravalika/pravalika.component';


@NgModule({
  declarations: [
    AppComponent,
    routingcomponent,
    PravalikaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
