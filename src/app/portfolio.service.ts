import {Injectable} from '@angular/core';
import {NodeApiService} from "./node-api.service";
import {Alert, Portfolio, PurchaseStock, stock, StockQuote} from "./objects";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  public loading: boolean = false;
  public myPortfolio: Portfolio;
  public doc: string = 'Portfolio';
  public backend: NodeApiService;
  public user: string = 'User';
  public Fetched: boolean = false;

  constructor(backend: NodeApiService) {
    this.backend = backend;
    this.FetchPortfolio();
  }

  upDatePortfolio(){
    this.loading = true;
    Promise.all(this.myPortfolio.stocks.map((stock:stock) => this.backend.getStockQuote(stock.ticker))).then(
      (data: StockQuote[]) => {
        this.myPortfolio.stocks.forEach((stock: stock, index: number) => {
          stock.current_price = data[index].c;
          this.setMetaData(stock);
        });
        this.loading = false;
      });

  }

  FetchPortfolio(){
    this.loading = true;
    return this.backend.MongoDBList(this.doc).then((data: any) => {
      if (data.length == 0){
        this.myPortfolio = {balance: 25000, stocks: [], user: this.user};
        this.createPortfolio(this.myPortfolio);
        this.loading = false;
      }
      else{
        this.myPortfolio =data[0];
        this.upDatePortfolio()
      }
      this.Fetched = true;
    });
  }

  isInPortfolio(ticker: string){
    return this.myPortfolio.stocks.some((t:any) => t.ticker === ticker);
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

  syncPortfolio(){
    let query = {user: this.user};
    let updateData = {balance: this.myPortfolio.balance, stocks: this.myPortfolio.stocks};
    return this.backend.MongoDBUpdate(this.doc, query, updateData);
  }

  setMetaData(stock_obj: stock|any){
    stock_obj.avg_price = stock_obj.total_price / stock_obj.quantity;
    stock_obj.change = (stock_obj.current_price - stock_obj.avg_price).toFixed(2);
    stock_obj.mrkt_value = stock_obj.current_price * stock_obj.quantity;
    return stock_obj;
  }


  BuyStock(t: PurchaseStock): Promise<Alert>{
    let transaction_amount =  t.quantity* t.price
    if(this.myPortfolio.balance < transaction_amount){
      return new Promise((resolve, reject) => {
        resolve({type: 'danger', message: 'Insufficient Balance'});
      });
    }
    else{
      if(!this.isInPortfolio(t.ticker)){
        this.myPortfolio.stocks.push({ticker: t.ticker, name: t.name, quantity: 0, total_price: 0,});
      }
      let stockobj = this.getPortfolio(t.ticker);
      stockobj.quantity += t.quantity;
      stockobj.total_price += transaction_amount;
      stockobj.current_price = t.price;
      this.myPortfolio.balance -= transaction_amount;
      this.setMetaData(stockobj);
      return this.syncPortfolio().then(() => {
        return {type: 'success', message: `${t.ticker} bought Successfully`}
      });
    }

  }

  SellStock(t: PurchaseStock): Promise<Alert>{
    let transaction_amount =  t.quantity* t.price
    if(!this.isInPortfolio(t.ticker)){
      return new Promise((resolve, reject) => {
        resolve({type: 'danger', message: 'Stock not in Portfolio'});
      });
    }
    else{
      let stockobj = this.getPortfolio(t.ticker);
      if(stockobj.quantity < t.quantity){
        return new Promise((resolve, reject) => {
          resolve({type: 'danger', message: 'Insufficient Stocks'});
        });
      }
      else{
        stockobj.quantity -= t.quantity;
        stockobj.total_price -= transaction_amount;
        stockobj.current_price = t.price;
        this.myPortfolio.balance += transaction_amount;
        this.setMetaData(stockobj);
        if(stockobj.quantity == 0){
          let index = this.myPortfolio.stocks.indexOf(stockobj);
          this.myPortfolio.stocks.splice(index, 1);
        }
        return this.syncPortfolio().then(() => {
          return {type: 'danger', message: `${t.ticker} sold Successfully`}
        });
      }
    }
  }

  getPortfolio(ticker: string){
    return this.myPortfolio.stocks.find((stock:stock) => stock.ticker === ticker);
  }
  getPortfolioAsync(ticker: string){
    if (!this.Fetched){
      return this.FetchPortfolio().then(() => {
        return this.myPortfolio.stocks.find((stock:stock) => stock.ticker === ticker);
      });
    }
    else{
      return new Promise((resolve, reject) => {
        resolve(this.myPortfolio.stocks.find((stock:stock) => stock.ticker === ticker))});
    }
  }


}
