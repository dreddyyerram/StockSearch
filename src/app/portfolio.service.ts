import {Injectable} from '@angular/core';
import {NodeApiService} from "./node-api.service";
import {Alert, CAlert, Portfolio, PurchaseStock, stock, StockQuote} from "./objects";
import {timer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  public loading: boolean = false;
  public myPortfolio: Portfolio = {};
  public doc: string = 'Portfolio';
  public backend: NodeApiService;
  public user: string = 'User';
  public Fetched: boolean = false;
  public portfolioAlerts: CAlert[] = [];
  public nextId = 0;
  public ClonedPortfolio: Portfolio;

  constructor(backend: NodeApiService) {
    this.backend = backend;
    this.FetchPortfolio();
  }

  upDatePortfolio(sync: boolean = false){
    if(!sync){
      this.loading = true;
    }
    Promise.all(this.ClonedPortfolio.stocks.map((stock:stock) => this.backend.getStockQuote(stock.ticker))).then(
      (data: StockQuote[]) => {
        this.ClonedPortfolio.stocks.forEach((stock: stock, index: number) => {
          stock.current_price = data[index].c;
          this.setMetaData(stock);
        });
        this.myPortfolio = JSON.parse(JSON.stringify(this.ClonedPortfolio));
        if(!sync){
          this.loading = false;
        }
      });

  }

  FetchPortfolio(sync: boolean = false){
    if(!sync){
      this.loading = true;
    }
    return this.backend.MongoDBList(this.doc).then((data: any) => {
      if (data.length == 0){
        this.myPortfolio = {balance: 25000, stocks: [], user: this.user};
        this.createPortfolio(this.myPortfolio);
        if(!sync){
          this.loading = false;
        }
      }
      else{
        this.ClonedPortfolio =data[0];
        this.upDatePortfolio(sync)
      }
      this.Fetched = true;
    });
  }

  isInPortfolio(ticker: string){
    return this.myPortfolio.stocks.some((t:any) => t.ticker === ticker);
  }

  InPortfolio(ticker: string, portfolio: Portfolio){
    return portfolio.stocks.some((t:any) => t.ticker === ticker);

  }

  isInPortfolioAsync(ticker: string): Promise<boolean>{
    if (this.myPortfolio.stocks.length == 0){
      return this.FetchPortfolio().then(() => {
        return this.isInPortfolio(ticker)});
    }
    else{
      return new Promise((resolve, reject)  => {
        resolve(this.isInPortfolio(ticker));
      });}
  }

  createPortfolio(port: Portfolio){
    this.backend.MongoDBAddEntry(this.doc, port);
  }

  syncPortfolio(portfolio:Portfolio){
    let query = {user: this.user};
    let updateData = {balance: portfolio.balance, stocks: portfolio.stocks};
    return this.backend.MongoDBUpdate(this.doc, query, updateData);
  }

  setMetaData(stock_obj: stock|any){
    stock_obj.avg_price = stock_obj.total_price / stock_obj.quantity;
    stock_obj.change = (stock_obj.current_price - stock_obj.avg_price);
    stock_obj.mrkt_value = stock_obj.current_price * stock_obj.quantity;
    return stock_obj;
  }


  BuyStock(t: PurchaseStock): Promise<Alert>{
    let transaction_amount =  t.quantity* t.price
    if(this.myPortfolio.balance < transaction_amount){
      return new Promise((resolve, reject) => {
        this.addAlert('danger', 'Insufficient Balance');
        resolve({type: 'danger', message: 'Insufficient Balance'});
      });
    }
    else{
      let duplicatePortfolio = this.ClonedPortfolio;
      if(!this.InPortfolio(t.ticker, duplicatePortfolio)){
        duplicatePortfolio.stocks.push({ticker: t.ticker, name: t.name, quantity: 0, total_price: 0,});
      }
      let stockobj = duplicatePortfolio.stocks.find((stock:stock) => stock.ticker === t.ticker);
      duplicatePortfolio.balance -= transaction_amount;
      this.myPortfolio.balance = duplicatePortfolio.balance;
      stockobj.quantity += t.quantity;
      stockobj.total_price += transaction_amount;
      stockobj.current_price = t.price;

      this.setMetaData(stockobj);
      return this.syncPortfolio(duplicatePortfolio).then(() => {
        this.FetchPortfolio(true);
        this.addAlert('success', `${t.ticker} bought Successfully`)
        return {type: 'success', message: `${t.ticker} bought Successfully`}
      });
    }

  }

  SellStock(t: PurchaseStock): Promise<Alert>{
    let transaction_amount =  t.quantity* t.price
    if(!this.isInPortfolio(t.ticker)){
      return new Promise((resolve, reject) => {
        this.addAlert('danger', 'Stock not in Portfolio');
        resolve({type: 'danger', message: 'Stock not in Portfolio'});
      });
    }
    else{
      let stockobj = this.getPortfolio(t.ticker);
      if(stockobj.quantity < t.quantity){
        return new Promise((resolve, reject) => {
          this.addAlert('danger', 'Insufficient Stocks');
          resolve({type: 'danger', message: 'Insufficient Stocks'});
        });
      }
      else{
        let duplicatePortfolio = this.ClonedPortfolio;
        let stockobj = duplicatePortfolio.stocks.find((stock:stock) => stock.ticker === t.ticker);
        duplicatePortfolio.balance += transaction_amount;
        this.myPortfolio.balance = duplicatePortfolio.balance;
        stockobj.quantity -= t.quantity;
        stockobj.total_price -= transaction_amount;
        stockobj.current_price = t.price;
        this.setMetaData(stockobj);
        if(stockobj.quantity == 0){
          let index = duplicatePortfolio.stocks.indexOf(stockobj);
          duplicatePortfolio.stocks.splice(index, 1);
        }
        return this.syncPortfolio(duplicatePortfolio).then(() => {
          this.myPortfolio = {}
          this.FetchPortfolio(true);
          this.addAlert('danger', `${t.ticker} sold Successfully`);
          return {type: 'danger', message: `${t.ticker} sold Successfully`}
        });
      }
    }
  }

  getPortfolio(ticker: string){
    return this.ClonedPortfolio.stocks.find((stock:stock) => stock.ticker === ticker);
  }
  getPortfolioAsync(ticker: string){
    if (!this.Fetched){
      return this.FetchPortfolio().then(() => {
        return this.ClonedPortfolio.stocks.find((stock:stock) => stock.ticker === ticker);
      });
    }
    else{
      return new Promise((resolve, reject) => {
        resolve(this.ClonedPortfolio.stocks.find((stock:stock) => stock.ticker === ticker))});
    }
  }


  addAlert(type: string, message: string) {
    const alertId = this.nextId++;
    this.portfolioAlerts.push({id: alertId, type, message});
    timer(5000).subscribe(() => this.closeAlert(alertId));


  }
  closeAlert(id: number) {
    this.portfolioAlerts = this.portfolioAlerts.filter(alert => alert.id !== id);
  }

}
