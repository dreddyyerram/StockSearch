import {Injectable, Input} from '@angular/core';
import {NodeApiService} from "./node-api.service";
import {
  ALERTS, CAlert,
  ChartResponse, EarningsResponse,
  InsiderResponse,
  NewsResponse,
  Peers,
  Recommendation,
  stock,
  StockDetails, StockQuote
} from "./objects";
import {WatchlistService} from "./watchlist.service";
import {PortfolioService} from "./portfolio.service";

@Injectable({
  providedIn: 'root'
})
export class StateService {
  ticker : string ='';
  stock_details: StockDetails | any;
  stock_quote: StockQuote | any;
  marketOpen: boolean = false;
  trend : Recommendation | any;
  peers: Array<string> | any;
  chartData: ChartResponse | any;
  lastUpdated: Date | any;
  news: NewsResponse | any;
  hourChart: ChartResponse | any;
  insiders: InsiderResponse | any;
  recommendations: Recommendation | any;
  earnings: EarningsResponse | any;
  portStock: stock | any;
  error: boolean = false;
  Loading: boolean = false;
  errorMessage: any;
  watchlistEnabled: boolean = false;
  allPromises: any = [];
  nextId: number = 0;
  state: any = {};

  constructor(private backend: NodeApiService, private watchlistService: WatchlistService, private portService: PortfolioService){

  }

  public setState(state: any){
    this.state = state;
    this.ticker = state.ticker;
    console.log("Setting state")
  }
  public clearState() {
    console.log("Clearing State");
    this.state = {};
    this.ticker = '';
  }

  public getState() {
    return this.state;
  }




}
