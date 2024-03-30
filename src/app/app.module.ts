import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import {NgOptimizedImage} from "@angular/common";
import { ResultComponent } from './search/result/result.component';
import {FormsModule} from "@angular/forms";
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SummaryComponent } from './search/result/summary/summary.component';
import { NewsComponent } from './search/result/news/news.component';
import { ChartsComponent } from './search/result/charts/charts.component';
import { InsightsComponent } from './search/result/insights/insights.component';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatCardModule} from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { RouteReuseStrategy } from '@angular/router';
import {NodeApiService} from "./node-api.service";
import {StateService} from "./state.service";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    FooterComponent,
    ResultComponent,
    SummaryComponent,
    NewsComponent,
    ChartsComponent,
    InsightsComponent,
    WatchlistComponent,
    PortfolioComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgOptimizedImage,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HighchartsChartModule,
    MatCardModule,
    FontAwesomeModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [NodeApiService, StateService],
  bootstrap: [AppComponent]

})
export class AppModule { }
