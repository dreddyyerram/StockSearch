import { Injectable } from '@angular/core';
import {StockQuote, StockDetails, Watchlist} from "./objects";
import {NodeApiService} from "./node-api.service";
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  public loading: boolean = false;
  public watchList: Array<Watchlist> = [];

  constructor(private backend: NodeApiService) {
    this.FetchWatchList()
    this.upDateWatchList()
  }

  upDateWatchList(){
    this.loading = true;
    Promise.all(this.watchList.map(stock => this.backend.getStockQuote(stock.ticker))).then(
      (data: StockQuote[]) => {
        this.watchList.forEach((stock, index) => {
          stock.quote = data[index];
        });
        this.loading = false;
      });

  }

  ngOnInit() {
  }

  FetchQuotes(){
    return this.watchList.forEach(stock => {
        this.backend.getStockQuote(stock.ticker).then((data: StockQuote) => {
          stock.quote = data;
        });
      });
  }
  FetchWatchList(){
    this.watchList = [{ticker: 'AAPL', name: 'Apple Inc', quote: null},
      {ticker: 'MSFT', name: 'Microsoft Corporation', quote: null},
      {ticker: 'GOOGL', name: 'Alphabet Inc', quote: null}]
  }

  isWatchListed(ticker: string){
    return this.watchList.some(t => t.ticker === ticker);
  }
  getWatchList(){
    return this.watchList;
  }

  removeStock(ticker: string){
    this.watchList.splice(this.watchList.findIndex(stock => stock.ticker === ticker), 1);
    console.log(`removed Stock ${ticker}`, this.watchList);
    // this.watchList = this.watchList.filter(t => t.ticker !== ticker);
  }

  addStock(stock: StockDetails, quote: StockQuote){
    this.watchList.push({ticker: stock.ticker, name: stock.name, quote: quote});
  }

}
