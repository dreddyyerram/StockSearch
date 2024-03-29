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
  // breakpoints = { sm: 576, md: 768, lg: 992, xl: 1200 };
  //
  // // Function to determine the height based on window width
  // calculateImageRatio() {
  //   const vw = window.innerWidth;
  //   if (vw < this.breakpoints.sm) {
  //     return '3/2'; // Example for extra small devices
  //   } else if (vw >= this.breakpoints.sm && vw < this.breakpoints.md) {
  //     return '3/2'; // Example for small devices
  //   } else if (vw >= this.breakpoints.md && vw < this.breakpoints.lg) {
  //     return '5/5'; // Example for medium devices
  //   } else {
  //     return '3/2'; // Example for large devices and above
  //   }
  // }

  // You can call this function directly in the template
  // or use a property to store the calculated height
  // get ratio(): string {
  //   return this.calculateImageRatio();
  // }
  //

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
    this.news = this.news.filter((x: any) => this.vaidNews(x));
    this.news = this.news.slice(0, 20);
  }


  protected readonly encodeURI = encodeURI;
  protected readonly encodeURIComponent = encodeURIComponent;
}
