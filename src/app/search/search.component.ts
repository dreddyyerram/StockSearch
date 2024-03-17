import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  ticker: string = '';
  tickerInput: string = '';
  constructor(private route: ActivatedRoute,
              private router: Router  ) {
    //'search/:ticker' is the route that we are currently on. We can access the value of the ticker parameter in the URL by using
    this.route.params.subscribe(params => {
      this.ticker = params['ticker'] || '';
      this.tickerInput = this.ticker;
    });
  }

  ngOnInit() {

  }

}
