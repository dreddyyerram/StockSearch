import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {NodeApiService} from "../node-api.service";
import {faX, faSearch} from "@fortawesome/free-solid-svg-icons";
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import {AutoSearchResult, ALERTS} from "../objects";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  myControl = new FormControl('');
  options: any[] = [];
  ticker: string= '';
  tickerInput: string= '';
  loading: boolean = false;
  errorMessage: any;
  faX = faX;
  faSearch = faSearch;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private backend: NodeApiService) {
    this.options = [];
    this.route.params.subscribe(params => {
      this.ticker = params['ticker'] || '';
      if (this.ticker !== this.tickerInput){
        console.log("changing")
        this.tickerInput = this.ticker;
        this.backend.ticker = this.tickerInput;
      }
    });
  }

  ngOnInit() {
    this.myControl.valueChanges.subscribe(value => {
      if (value === '' || value === null || value === undefined){
        this.options = [];
        this.loading = false;
      }
      else{
        this.tickerInput = value;
        this.backend.ticker = this.tickerInput;
        this.loading = true;
        this.options = [];
        this.backend.getSearchList(value).then((data: AutoSearchResult) => {
          this.loading = false;
          this.options = data.result;
        });
      }});

    }

  onEnter(){
    console.log(this.tickerInput);
    this.options = [];
    this.loading = false;
    if (this.tickerInput === ""){
      this.errorMessage = ALERTS.InvalidTicker;
      return;
    }
    this.router.navigate(['/search', this.tickerInput]);
  }

  reset(){
    this.tickerInput = '';
    this.options = [];
    this.loading = false;
    this.errorMessage = null;``
    this.router.navigate(['/search']);
  }


  protected readonly facebook = faFacebookSquare;
}
