import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NodeApiService {
  domain = 'http://localhost:3000/api';

  constructor() { }

  public genericNodeApi(ticker: string, endpoint: string){
    return fetch(`${this.domain}/${endpoint}?symbol=${ticker}`, {mode: 'cors'})
    .then(response => response.json());
  }

  public getStockDetails(ticker: string){
    return this.genericNodeApi(ticker, 'stock/profile');
  }

  public getChartData(ticker: string){
    return this.genericNodeApi(ticker, 'stock/charts');
  }

  public getStockQuote(ticker: string){
    return this.genericNodeApi(ticker, 'stock/quote');
  }

  public getSearchList(ticker: string){
    return this.genericNodeApi(ticker, 'stock/search');
  }

  public getNews(ticker: string){
    return this.genericNodeApi(ticker, 'stock/news');
  }

  public getRecommendations(ticker: string){
    return this.genericNodeApi(ticker, 'stock/recommendation');
  }

  public getInsiders(ticker: string){
    return this.genericNodeApi(ticker, 'stock/insider');
  }

  public getPeers(ticker: string){
    return this.genericNodeApi(ticker, 'stock/peers');
  }

  public getEarnings(ticker: string){
    return this.genericNodeApi(ticker, 'stock/earnings');
  }

  public customNodeApi(endpoint: string, queries: any){
    let query = '';
    for (const key in queries){
      query += `${key}=${queries[key]}&`;
    }
    query = query.slice(0, -1);
    return fetch(`${this.domain}/${endpoint}?${query}`, {mode: 'cors'})
    .then(response => response.json());

  }

  public getHourlyChartData(ticker: string, fromDate: Date, toDate: Date){
    let queries = {
      symbol: ticker,
      from: fromDate.toISOString().split('T')[0],
      to: toDate.toISOString().split('T')[0],
      span: 'hour'
    };
    return this.customNodeApi('stock/charts', queries);

  }

}
