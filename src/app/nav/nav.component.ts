import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WatchlistService} from 'src/app/watchlist.service';
import {PortfolioService} from "src/app/portfolio.service";
import {NodeApiService} from "../node-api.service";
import {StateService} from "../state.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: []
})
export class NavComponent {
  ticker: string = '';
  service: any = '';
  constructor(private route: ActivatedRoute,
              private router: Router,
              private watchlistService: WatchlistService,
              private portfolioService: PortfolioService,
              private nodeApiService: NodeApiService,
              private state: StateService) {
    this.service = state;

  }

}
