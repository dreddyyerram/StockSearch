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
  public doc: string = 'WatchList';

  constructor(private backend: NodeApiService) {
    this.FetchWatchList();
  }

  upDateWatchList(){
    this.loading = true;
    return Promise.all(this.watchList.map(stock => this.backend.getStockQuote(stock.ticker))).then(
      (data: StockQuote[]) => {
        this.watchList.forEach((stock, index) => {
          stock.quote = data[index];
        });
        this.loading = false;
      });

  }


  FetchWatchList(){
    this.loading = true;
    return this.backend.MongoDBList(this.doc).then((data: any) => {
      this.watchList = data;
      this.upDateWatchList()
    });
  }

  isWatchListed(ticker: string){
    return this.watchList.some(t => t.ticker === ticker);
  }

  isWatchListedAsync(ticker: string): Promise<boolean>{
    if (this.watchList.length == 0){
      return this.FetchWatchList().then(() => {
        return this.watchList.some(t => t.ticker === ticker);});
    }
    else{
    return new Promise((resolve, reject)  => {
      resolve(this.watchList.some(t => t.ticker === ticker));
    });}
  }

  removeStock(ticker: string){
    this.watchList.splice(this.watchList.findIndex(stock => stock.ticker === ticker), 1);
    this.backend.MongoDBDeleteEntry(this.doc, {ticker: ticker})
    // this.watchList = this.watchList.filter(t => t.ticker !== ticker);
  }

  addStock(stock: StockDetails, quote: StockQuote){
    this.watchList.push({ticker: stock.ticker, name: stock.name, quote: quote});
    return this.backend.MongoDBAddEntry(this.doc, {ticker: stock.ticker, name: stock.name})
  }

}
