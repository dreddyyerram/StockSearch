import {Injectable} from '@angular/core';
import {samples, StockDetails} from './objects';

@Injectable({
  providedIn: 'root'
})
export class NodeApiService {
  domain = 'http://localhost:3000/api';
  mongodb: string = 'http://localhost:3000/api/mongoDB/HW3'
  test: boolean = false;
  mongoTest: boolean = false;
  localDB: any;

  constructor() {

    this.localDB = JSON.parse(localStorage.getItem(
      'localDB') || '{"Portfolio": [], "Watchlist": []}');
    console.log("Initial", this.localDB);

  }

  public getQueryString(query: any) {
    let queryString = '';
    for (const key in query) {
      queryString += `${key}=${query[key]}&`;
    }
    return queryString.slice(0, -1);
  }

  public genericNodeApi(ticker: string, endpoint: string, id: string) {
    if (this.test) {
      return new Promise((resolve, reject): any => {
        // @ts-ignore
        resolve(samples[id]);
      });
    }
    return fetch(`${this.domain}/${endpoint}?symbol=${ticker}`, {mode: 'cors'})
      .then(response => response.json());
  }

  public getStockDetails(ticker: string) {
    return this.genericNodeApi(ticker, 'stock/profile', 'profile');
  }

  public getChartData(ticker: string) {
    return this.genericNodeApi(ticker, 'stock/charts', 'charts');
  }

  public getStockQuote(ticker: string) {
    return this.genericNodeApi(ticker, 'stock/quote', 'quote');
  }

  public getSearchList(ticker: string) {
    return this.genericNodeApi(ticker, 'stock/search', 'search');
  }

  public getNews(ticker: string) {
    return this.genericNodeApi(ticker, 'stock/news', 'news');
  }

  public getRecommendations(ticker: string) {
    return this.genericNodeApi(ticker, 'stock/recommendation', 'recommendation');
  }

  public getInsiders(ticker: string) {
    return this.genericNodeApi(ticker, 'stock/insider', 'insider');
  }

  public getPeers(ticker: string) {
    return this.genericNodeApi(ticker, 'stock/peers', 'peers');
  }

  public getEarnings(ticker: string) {
    return this.genericNodeApi(ticker, 'stock/earnings', 'earnings');
  }

  public customNodeApi(endpoint: string, queries: any) {
    let query = this.getQueryString(queries);
    return fetch(`${this.domain}/${endpoint}?${query}`, {mode: 'cors'})
      .then(response => response.json());

  }

  public getHourlyChartData(ticker: string, fromDate: Date, toDate: Date) {
    let queries = {
      symbol: ticker,
      from: fromDate.toISOString().split('T')[0],
      to: toDate.toISOString().split('T')[0],
      span: 'hour'
    };
    if (this.test) {
      return this.genericNodeApi(ticker, 'stock/charts', 'hourlychart');
    }
    return this.customNodeApi('stock/charts', queries);

  }

  public MongoDBAddEntry(doc: string, data: any) {
    if (this.mongoTest) {
      return this.testMongoDBAddEntry(doc, data);
    }
    return fetch(`${this.mongodb}/${doc}`, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => console.log("Added Entry to ", doc, data, response.json()));
  }

  public MongoDBGetEntry(doc: string, query: any) {
    if (this.mongoTest) {
      return this.testMongoDBGetEntry(doc, query);
    }

    let queries = this.getQueryString(query);
    queries = queries.slice(0, -1);
    return fetch(`${this.mongodb}/${doc}?${queries}`, {mode: 'cors'})
      .then(response => response.json());
  }

  public MongoDBList(doc: string) {
    if (this.mongoTest) {
      return this.testMongoDBList(doc);
    }

    return fetch(`${this.mongodb}/${doc}`, {mode: 'cors'})
      .then(response => response.json());
  }

  public MongoDBDeleteEntry(doc: string, query: any) {
    if (this.mongoTest) {
      return this.testMongoDBDeleteEntry(doc, query);
    }

    let queries = this.getQueryString(query);
    return fetch(`${this.mongodb}/${doc}?${queries}`, {
      mode: 'cors',
      method: 'DELETE'
    }).then(response => console.log("Deleted Entry from ", doc, query, response.json()));
  }

  public MongoDBUpdate(doc: string, query: any, data: any) {
    if (this.mongoTest) {
      return this.testMongoDBUpdate(doc, query, data);
    }

    let queries = this.getQueryString(query);
    return fetch(`${this.mongodb}/${doc}?${queries}`, {
      mode: 'cors',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'$set': data})
    }).then(response => console.log("Updated Entry in ", doc, response.json()));
  }


  public testMongoDBAddEntry(doc: string, data: any) {
    this.localDB[doc].push(data);
    localStorage.setItem('localDB', JSON.stringify(this.localDB));
    return new Promise((resolve, reject) => {
      console.log("Added Entry to ", doc, data, this.localDB[doc])
      resolve(Object.assign([], this.localDB[doc]));
    });
  }

  public testMongoDBGetEntry(doc: string, query: any) {
    return new Promise((resolve, reject) => {
      resolve(this.localDB[doc].filter((entry: any) => {
        for (const key in query) {
          if (entry[key] !== query[key]) {
            return false;
          }
        }
        return true;
      }));
    });
  }

  public testMongoDBList(doc: string) {
    return new Promise((resolve, reject) => {
      resolve(Object.assign([], this.localDB[doc]));
    });
  }

  public testMongoDBDeleteEntry(doc: string, query: any) {
    this.localDB[doc] = this.localDB[doc].filter((entry: any) => {
      for (const key in query) {
        if (entry[key] !== query[key]) {
          return true;
        }
      }
      return false;
    });
    localStorage.setItem('localDB', JSON.stringify(this.localDB));
    return new Promise((resolve, reject) => {
      resolve(Object.assign([], this.localDB[doc]));
    });
  }

  public testMongoDBUpdate(doc: string, query: any, data: any) {
    this.localDB[doc] = this.localDB[doc].map((entry: any) => {
      for (const key in query) {
        if (entry[key] !== query[key]) {
          return entry;
        }
      }
      return data;
    });
    localStorage.setItem('localDB', JSON.stringify(this.localDB));
    return new Promise((resolve, reject) => {
      resolve(Object.assign([], this.localDB[doc]));
    });
  }


}

