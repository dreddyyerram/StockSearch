import {Component, Input, OnChanges} from '@angular/core';
import {
  ChartResponse,
  Recommendation,
  StockDetails,
  StockQuote,
  Peers,
  NewsResponse,
  InsiderResponse,
  EarningsResponse
} from '../../objects'
import { NodeApiService } from '../../node-api.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, OnChanges{
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


  constructor(private backend: NodeApiService) {


  }

  ngOnInit() {

    this.backend.getStockDetails(this.ticker).then(
      (data: StockDetails) => {
        this.stock_details = data;
      });

    this.backend.getStockQuote(this.ticker).then((data: StockDetails) => {
      this.stock_quote = data;
      this.marketOpen = this.stock_quote.t *1000 > (Date.now() - 5 * 60 * 1000);
      const toDate: Date = new Date(this.stock_quote.t * 1000);
      const fromDate: Date = new Date(toDate);
      fromDate.setDate(toDate.getDate() - 1);
      this.backend.getHourlyChartData(this.ticker, fromDate, toDate).then((data: ChartResponse) => {
        console.log(data);
        this.hourChart = data;});
    });

    this.backend.getRecommendations(this.ticker).then((data: Recommendation) => {
      this.trend = data;
    });

    this.backend.getChartData(this.ticker).then((data: ChartResponse) => {
      console.log(data);
      this.chartData = data;});

    this.backend.getPeers(this.ticker).then((data: Peers) => {
      this.peers = data;
    });

    this.backend.getNews(this.ticker).then((data: NewsResponse) => {
      this.news = data;
    });

    this.backend.getInsiders(this.ticker).then((data: InsiderResponse) => {
      this.insiders = data;
    });

    this.backend.getRecommendations(this.ticker).then((data: Recommendation) => {
      this.recommendations = data;
    });

    this.backend.getEarnings(this.ticker).then((data: EarningsResponse) => {
      this.earnings = data;
    });


  }


  ngOnChanges() {
    console.log(this.ticker);
    this.ngOnInit();
  }

}
