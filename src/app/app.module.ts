import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import { TnrHistComponent } from './tnr-hist/tnr-hist.component';
import { IndexComponent } from './index/index.component';
import { BackDirective } from './back.directive';
import {NobrComponent} from "./nobr.component";

@NgModule({
  declarations: [
    AppComponent,
    TnrHistComponent,
    IndexComponent,
    BackDirective,
    NobrComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
