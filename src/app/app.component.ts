import { Component } from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {WatchlistService} from "./watchlist.service";
import {PortfolioService} from "./portfolio.service";
import {NodeApiService} from "./node-api.service";
import {StateService} from "./state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbModalConfig, NgbModal, WatchlistService, PortfolioService, NodeApiService, StateService],
})
export class AppComponent {
  title = 'StockSearch';
  constructor(private modalService: NgbModal, private watchlistService: WatchlistService,
              private portService: PortfolioService, private backend: NodeApiService, private state: StateService) {
  }
}
