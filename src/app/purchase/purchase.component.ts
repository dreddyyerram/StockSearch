import { Component,inject, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {PortfolioService} from "../portfolio.service";
import {Alert, PurchaseStock} from "../objects";

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {
  activeModal = inject(NgbActiveModal);
  @Input() transaction!: PurchaseStock;
  quantity: number = 0;
  service: PortfolioService;

  constructor(portService: PortfolioService) {
    this.service = portService;

  }

  transact(){
    if (this.transaction.type == 'Buy'){
      this.Buy();
    }
    else{
      this.Sell();
    }
  }

  Buy(){
    this.transaction.quantity = this.quantity;
    console.log("Transaction in Modal", this.transaction);
    this.activeModal.close(this.service.BuyStock(this.transaction));
    // this.service.BuyStock(this.transaction).then(
    //   (alert: Alert) => { this.activeModal.close(alert);});
  }

  Sell(){
    console.log("Transaction in Modal", this.transaction);
    this.transaction.quantity = this.quantity;
    this.activeModal.close(this.service.SellStock(this.transaction));
    // this.service.SellStock(this.transaction).then(
    //   (alert: Alert) => { this.activeModal.close(alert);});
  }

  close(){
    this.activeModal.dismiss(null);
  }
}
