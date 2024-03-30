import {Component, Input, OnChanges, OnDestroy} from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {
  ALERTS,
  CAlert,
  ChartResponse,
  EarningsResponse,
  InsiderResponse,
  NewsResponse,
  Peers,
  PurchaseStock,
  Recommendation,
  stock,
  StockDetails,
  StockQuote
} from '../../objects'
import {NodeApiService} from '../../node-api.service';
import {WatchlistService} from "../../watchlist.service";
import {PurchaseComponent} from "../../purchase/purchase.component";
import {PortfolioService} from "../../portfolio.service";
import {interval, timer} from "rxjs";
import {StateService} from "../../state.service";


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnChanges, OnDestroy{
  @Input() ticker !: string;
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
  alerts: CAlert[] = [];
  private nextId = 0;
  QuoteSubscription: any;



  clear(){
    this.stock_details = null;
    this.stock_quote = null;
    this.trend = null;
    this.peers = null;
    this.chartData = null;
    this.news = null;
    this.hourChart = null;
    this.insiders = null;
    this.recommendations = null;
    this.earnings = null;
    this.Loading = false;
    this.errorMessage = null;
    this.watchlistEnabled = false;
    this.portStock = null;
    if (this.QuoteSubscription){
      console.log("Unsubscribing");
        this.QuoteSubscription.unsubscribe();
    }
  }

  constructor(private backend: NodeApiService,
              private watchlistService: WatchlistService,
              private portService: PortfolioService,
              config: NgbModalConfig,
              private modalService: NgbModal, private state_service: StateService) {

  }

  async upDate() {
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
      this.lastUpdated = new Date()
      this.backend.getHourlyChartData(this.ticker, fromDate, toDate).then((data: ChartResponse) => {
        this.hourChart = data;
      });
      if(this.marketOpen){this.setSubscription();}
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
    let allPromises = [stockPromise, quotePromise, recommendPromise, chartPromise, peerPromise,
      newsPromise, insiderPromise, earningsPromise, watchListPromise, portServicePromise];
    await Promise.all(allPromises);
    this.saveSearchState()
    this.Loading = false;
  }

  saveSearchState(){
    this.state_service.setState({
        ticker: this.ticker,
        stock_details: this.stock_details,
        stock_quote: this.stock_quote,
        marketOpen: this.marketOpen,
        trend: this.trend,
        peers: this.peers,
        chartData: this.chartData,
        lastUpdated: this.lastUpdated,
        news: this.news,
        hourChart: this.hourChart,
        insiders: this.insiders,
        recommendations: this.recommendations,
        earnings: this.earnings,
        error: this.error,
        Loading: this.Loading,
        errorMessage: this.errorMessage,
        nextId: this.nextId
      });
    }

  restoreSearchState(state: any){
    this.ticker = state.ticker;
    this.stock_details = state.stock_details;
    this.stock_quote = state.stock_quote;
    this.marketOpen = state.marketOpen;
    this.trend = state.trend;
    this.peers = state.peers;
    this.chartData = state.chartData;
    this.news = state.news;
    this.hourChart = state.hourChart;
    this.insiders = state.insiders;
    this.recommendations = state.recommendations;
    this.earnings = state.earnings;
    this.error = state.error;
    this.Loading = state.Loading;
    this.errorMessage = state.errorMessage;
    this.nextId = state.nextId;
    this.lastUpdated = state.lastUpdated;
  }

  watchList(){
    if (this.watchlistEnabled){
      this.watchlistService.removeStock(this.ticker);
      this.addAlert('danger', `Removed ${this.stock_details.ticker} from Watchlist`)
      this.watchlistEnabled = false;
    }
    else{
      this.watchlistService.addStock(this.stock_details, this.stock_quote);
      this.addAlert('success', `Added ${this.stock_details.ticker} from Watchlist`)
      this.watchlistEnabled = true;
    }
  }

  ngOnChanges() {
    if(this.ticker === undefined || this.ticker === null || this.ticker === ""){
      return;
    }
    let last_state = this.state_service.getState();
    if (last_state && last_state['ticker'] === this.ticker && !last_state['Loading']){
      this.restoreSearchState(last_state);
      this.reloadStockObjects();
    }
    else{
      this.upDate();
      this.saveSearchState();
    }
  }

  reloadStockObjects(){

    let watchListPromise = this.watchlistService.isWatchListedAsync(this.ticker).then((data: boolean) => {this.watchlistEnabled = data});
    let portServicePromise = this.portService.getPortfolioAsync(this.ticker).then((data: stock) => {this.portStock = data});
    if(this.marketOpen){this.setSubscription();}

  }

  setSubscription(){
    if (this.QuoteSubscription){
      this.QuoteSubscription.unsubscribe();
    }
    console.log("Setting Subscription")
    this.QuoteSubscription = interval(15000).subscribe(() => {
      this.lastUpdated = Date.now();
      this.backend.getStockQuote(this.ticker).then((data: StockQuote) => {
        this.stock_quote = data;
        this.marketOpen = this.stock_quote.t * 1000 > (this.lastUpdated - 5 * 60 * 1000);
      });
    });
  }

  Buy(){
    let transaction: PurchaseStock = {
      type: 'Buy',
      ticker: this.stock_details.ticker,
      price: this.stock_quote.c,
      name: this.stock_details.name,
      quantity: 0,
      max_buy_price: this.portService.myPortfolio.balance,
      max_sell:0
    };
    const modalRef = this.modalService.open(PurchaseComponent,{ size: 'md', modalDialogClass: 'news-modal'});
    modalRef.componentInstance.transaction = transaction;
    return modalRef.result.then((result) => {
      if (result) {
        this.addAlert(result.type, result.message);
        this.portService.getPortfolioAsync(this.ticker).then((data: stock) => {this.portStock = data});
      }

    });

  }

  Sell(){
    let transaction: PurchaseStock = {
      type: 'Sell',
      ticker: this.stock_details.ticker,
      price: this.stock_quote.c,
      name: this.stock_details.name,
      quantity: 0,
      max_buy_price: 0,
      max_sell: this.portStock.quantity
    };
    const modalRef = this.modalService.open(PurchaseComponent, { size: 'md', modalDialogClass: 'news-modal'});
    modalRef.componentInstance.transaction = transaction;
    return modalRef.result.then((result) => {
      if (result) {
        this.addAlert(result.type, result.message);
        this.portService.getPortfolioAsync(this.ticker).then((data: stock) => {this.portStock = data});
      }
    });
  }

  addAlert(type: string, message: string) {
    const alertId = this.nextId++;
    this.alerts.push({id: alertId, type, message});

    // Remove the alert after 5 seconds without SetTimeout function
    timer(7000).subscribe(() => this.closeAlert(alertId));
  }

  closeAlert(id: number) {
    this.alerts = this.alerts.filter(alert => alert.id !== id);
  }

  ngOnDestroy() {
    this.saveSearchState()
    if (this.QuoteSubscription){
      console.log("Unsubscribing");
      this.QuoteSubscription.unsubscribe();
    }
  }

}
