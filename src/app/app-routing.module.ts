import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TnrHistComponent} from "./tnr-hist/tnr-hist.component";
import {IndexComponent} from "./index/index.component";

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'tnr-hist', component: TnrHistComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
