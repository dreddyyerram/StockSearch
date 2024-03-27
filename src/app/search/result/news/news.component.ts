import {Component, Input, OnChanges, TemplateRef} from '@angular/core';
import { NewsResponse, News} from '../../../objects';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import {faFacebookSquare, faXTwitter} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [],
})
export class NewsComponent implements OnChanges{
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

  vaidNews(news: News){
    if (news.image == null || news.image == ''
        || news.headline == null || news.headline == ''
        || news.url == null || news.url == ''
        || news.source == null || news.source == ''
        || news.summary == null || news.summary == ''
        || news.datetime == null || news.datetime == '') {
        return false;
      }
    return true;
  }
  ngOnChanges() {
    console.log(this.news);
    this.news = this.news.filter((x: any) => this.vaidNews(x));
    this.news = this.news.slice(0, 20);
  }


}
