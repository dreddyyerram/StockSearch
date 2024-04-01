import {Component, TemplateRef} from '@angular/core';
import {NodeApiService} from "../node-api.service";
import {PortfolioService} from "../portfolio.service";
import {CAlert, EmptyPortFolio, PurchaseStock, stock} from "../objects";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {PurchaseComponent}  from "../purchase/purchase.component";
import {Router} from "@angular/router";
import { timer } from 'rxjs';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  service: PortfolioService;
  EmptyAlert = EmptyPortFolio;
  private nextId = 0;
  constructor(private backend: NodeApiService, private portService: PortfolioService,
              config: NgbModalConfig,
              private modalService: NgbModal, private route: Router){
    this.service = portService;
  }
  ngOnInit() {
    this.portService.FetchPortfolio();
    this.portService.portfolioAlerts = [];
  }

  Buy(stock: stock){
    let transaction: PurchaseStock = {
      type: 'Buy',
      ticker: stock.ticker,
      price: stock.current_price,
      name:  stock.name,
      quantity: 0,
      max_buy_price: this.portService.myPortfolio.balance,
      max_sell:0
    };
    const modalRef = this.modalService.open(PurchaseComponent,{ size: 'md', modalDialogClass: 'news-modal'});
    modalRef.componentInstance.transaction = transaction;
    return modalRef.result;
  }

  Sell(stock: stock){
    let transaction: PurchaseStock = {
      type: 'Sell',
      ticker: stock.ticker,
      price: stock.current_price,
      name:  stock.name,
      quantity: 0,
      max_buy_price: 0,
      max_sell: stock.quantity
    };
    const modalRef = this.modalService.open(PurchaseComponent, { size: 'md', modalDialogClass: 'news-modal'});
    modalRef.componentInstance.transaction = transaction;
    return modalRef.result;
  }

  routeToSearch(s: any){
    this.route.navigate(['/', 'search', s.ticker]);
  }


}
