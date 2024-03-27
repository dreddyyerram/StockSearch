import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from "./search/search.component";
import {WatchlistComponent} from "./watchlist/watchlist.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";

const routes: Routes = [
  {path: 'search/home', component: SearchComponent},
  {path: '', redirectTo: '/search/home', pathMatch: 'full'},
  {path: 'search/:ticker', component: SearchComponent,
    // data: {shouldDetach: true, storeKey: 'search'}
  },
  {path: 'search', redirectTo: '/search/home'},
  {path: 'watchlist', component: WatchlistComponent},
  {path: 'portfolio', component: PortfolioComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
