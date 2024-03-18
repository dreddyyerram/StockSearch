import {Component, Input, TemplateRef} from '@angular/core';
import { NewsResponse, News} from '../../../objects';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import {faFacebookSquare, faXTwitter} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class NewsComponent {
  @Input() news: NewsResponse | any;
  newsModal: News | any;
  twitter = faXTwitter;
  facebook = faFacebookSquare;
  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
  ){
    config.backdrop = 'static';
    config.keyboard = false;
  }
  open(id: TemplateRef<any>, news:News) {
    this.newsModal = news;
    this.modalService.open(id, { size: 'md', modalDialogClass: 'news-modal'});
  }

}
