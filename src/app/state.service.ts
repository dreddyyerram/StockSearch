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

  constructor(private backend: NodeApiService, private watchlistService: WatchlistService, private portService: PortfolioService){

  }

  upDate(ticker:string) {
    this.ticker = ticker;
    this.clearState();
    this.errorMessage = null;
    if (this.ticker === ""){
      this.errorMessage = ALERTS.InvalidTicker;
      return;
    }
    this.Loading = true;
    let watchListPromise = this.watchlistService.isWatchListedAsync(this.ticker).then((data: boolean) => {this.watchlistEnabled = data});
    let portServicePromise = this.portService.getPortfolioAsync(this.ticker).then((data: stock) => {
      this.portStock = data
    });
    let stockPromise = this.backend.getStockDetails(this.ticker).then((data: StockDetails) => {
      if (data === undefined || data === null || JSON.stringify(data) === "{}" || data.error !== undefined) {
        this.errorMessage = ALERTS.NotFound;
        this.Loading = false;
      } else {
        this.stock_details = data;
      }
    });
    let quotePromise = this.backend.getStockQuote(this.ticker).then((data: StockDetails) => {
      this.stock_quote = data;
      this.marketOpen = this.stock_quote.t * 1000 > (Date.now() - 5 * 60 * 1000);
      const toDate: Date = new Date(this.stock_quote.t * 1000);
      const fromDate: Date = new Date(toDate);
      fromDate.setDate(toDate.getDate() - 1);
      this.lastUpdated = new Date();
      this.backend.getHourlyChartData(this.ticker, fromDate, toDate).then((data: ChartResponse) => {
        this.hourChart = data;
      });
    });
    let recommendPromise = this.backend.getRecommendations(this.ticker).then((data: Recommendation) => {
      this.trend = data;
    });
    let chartPromise = this.backend.getChartData(this.ticker).then((data: ChartResponse) => {
      this.chartData = data;
    });
    let peerPromise = this.backend.getPeers(this.ticker).then((data: Peers) => {
      this.peers = data.filter((peer: string) => !peer.includes('.'));
    });
    let newsPromise = this.backend.getNews(this.ticker).then((data: NewsResponse) => {
      this.news = data;
    });
    let insiderPromise = this.backend.getInsiders(this.ticker).then((data: InsiderResponse) => {
      this.insiders = data;
    });
    let earningsPromise = this.backend.getEarnings(this.ticker).then((data: EarningsResponse) => {
      this.earnings = data;
    });
    this.allPromises = [stockPromise, quotePromise, recommendPromise, chartPromise, peerPromise,
      newsPromise, insiderPromise, earningsPromise, watchListPromise, portServicePromise];
    return this.allPromises;
  }

  public state: { [key: string]: any } = {};

  public setState(state: any){
    this.state = state;
  }
  public clearState() {
    this.state = {};
    this.ticker = "";
    this.stock_details = {};
    this.stock_quote = {};
    this.marketOpen = false;
    this.trend = {};
    this.peers = [];
    this.chartData = {};
    this.lastUpdated = null;
    this.news = {};
    this.hourChart = {};
    this.insiders = {};
    this.recommendations = {};
    this.earnings = {};
    this.portStock = {};
    this.error = false;
    this.Loading = false;
    this.errorMessage = null;
    this.watchlistEnabled = false;
    this.allPromises = [];
  }

  public getState() {
    return this.state;
  }




}
