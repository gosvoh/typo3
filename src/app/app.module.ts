import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {OldsComponent} from './olds/olds.component';
import {IndexComponent} from './index/index.component';
import {BackDirective} from './back.directive';
import {NobrComponent} from "./nobr.component";
import {LembasComponent} from './lembas/lembas.component';
import { ArtsComponent } from './arts/arts.component';
import {ImgDirective} from "./ImgDirective";
import { LoadingComponent } from './loading/loading.component';
import { LimboComponent } from './limbo/limbo.component';
import { BackBtnComponent } from './back-btn/back-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    OldsComponent,
    IndexComponent,
    BackDirective,
    NobrComponent,
    LembasComponent,
    ArtsComponent,
    ImgDirective,
    LoadingComponent,
    LimboComponent,
    BackBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
