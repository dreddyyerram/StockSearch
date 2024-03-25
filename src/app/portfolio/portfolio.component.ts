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
  alerts: CAlert[] = [];
  private nextId = 0;
  constructor(private backend: NodeApiService, private portService: PortfolioService,
              config: NgbModalConfig,
              private modalService: NgbModal, private route: Router){
    this.service = portService;
  }
  ngOnInit() {
    this.portService.FetchPortfolio();
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
    return modalRef.result.then((result) => {
      if (result) {
        this.addAlert(result.type, result.message);
      }
    });
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
    return modalRef.result.then((result) => {
      if (result) {
        this.addAlert(result.type, result.message);
      }
    });
  }

  routeToSearch(s: any){
    this.route.navigate(['/', 'search', s.ticker]);
  }

  addAlert(type: string, message: string) {
    const alertId = this.nextId++;
    this.alerts.push({id: alertId, type, message});

    // Remove the alert after 5 seconds without SetTimeout function
    timer(5000).subscribe(() => this.closeAlert(alertId));


  }

  closeAlert(id: number) {
    this.alerts = this.alerts.filter(alert => alert.id !== id);
  }
}
