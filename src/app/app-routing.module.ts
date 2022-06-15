import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OldsComponent} from "./olds/olds.component";
import {IndexComponent} from "./index/index.component";
import {LembasComponent} from "./lembas/lembas.component";
import {ArtsComponent} from "./arts/arts.component";
import {LimboComponent} from "./limbo/limbo.component";

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'olds', component: OldsComponent},
  {path: 'lembas', component: LembasComponent},
  {path: 'arts', component: ArtsComponent},
  {path: 'limbo', component: LimboComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
