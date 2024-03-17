import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from "./search/search.component";

const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'search', component: SearchComponent},
  {path: 'search/:ticker', component: SearchComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
