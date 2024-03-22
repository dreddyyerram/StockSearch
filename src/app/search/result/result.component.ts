import {Component, Input, OnChanges} from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {
  ChartResponse,
  Recommendation,
  StockDetails,
  StockQuote,
  Peers,
  NewsResponse,
  InsiderResponse,
  EarningsResponse,
  ALERTS
} from '../../objects'
import { NodeApiService } from '../../node-api.service';
import {WatchlistService}   from "../../watchlist.service";


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnChanges{
  @Input() ticker !: string;
  stock_details: StockDetails | any;
  stock_quote: StockQuote | any;
  marketOpen: boolean = false;
  trend : Recommendation | any;
  peers: Array<string> | any;
  chartData: ChartResponse | any;
  news: NewsResponse | any;
  hourChart: ChartResponse | any;
  insiders: InsiderResponse | any;
  recommendations: Recommendation | any;
  earnings: EarningsResponse | any;
  error: boolean = false;
  Loading: boolean = false;
  errorMessage: any;
  watchlistEnabled: boolean = false;



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
  }

  constructor(private backend: NodeApiService,
              private watchlistService: WatchlistService) {
    this.clear();

  }

  async upDate() {
    this.clear();
    this.errorMessage = null;
    if (this.ticker === ""){
      console.log("Empty");
      this.errorMessage = ALERTS.InvalidTicker;
      return;
    }
    this.Loading = true;
    this.watchlistEnabled = this.watchlistService.isWatchListed(this.ticker);
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
      this.peers = data;
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
    let allPromises = [stockPromise, quotePromise, recommendPromise, chartPromise, peerPromise, newsPromise, insiderPromise, earningsPromise];
    await Promise.all(allPromises);
    this.Loading = false;

  }

  watchList(){
    if (this.watchlistEnabled){
      this.watchlistService.removeStock(this.ticker);
      this.watchlistEnabled = false;
    }
    else{
      this.watchlistService.addStock(this.stock_details, this.stock_quote);
      this.watchlistEnabled = true;
    }
  }

  clearError(){
    this.errorMessage = null;
  }

  ngOnChanges() {
    if(this.ticker === undefined || this.ticker === null){
      return;
    }
    this.upDate();

  }

}
