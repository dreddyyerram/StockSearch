import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {NodeApiService} from "../node-api.service";
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import {AutoSearchResult, ALERTS} from "../objects";
import {faXmark, faSearch} from "@fortawesome/free-solid-svg-icons";
import {StateService} from "../state.service";


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
  faX = faXmark;
  faSearch = faSearch;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private backend: NodeApiService,
              private state: StateService) {
    this.options = [];
    this.route.params.subscribe(params => {
      this.ticker = params['ticker'].toUpperCase() || '';
      if (this.ticker !== this.tickerInput){
        this.options = [];
        this.tickerInput = this.ticker.toUpperCase();
        this.backend.ticker = this.tickerInput.toUpperCase();
      }
    });
  }

  ngOnInit() {
    this.errorMessage = null;
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
          this.options = data.result.filter((option: any) => {
            return !option.symbol.includes('.');});
        });
      }});

    }

  onEnter(){
    this.options = [];
    this.loading = false;
    if (this.tickerInput === ""){
      this.errorMessage = ALERTS.InvalidTicker;
      return;
    }
    this.router.navigate(['/search', this.tickerInput.toUpperCase()]);
  }

  reset(){
    this.tickerInput = '';
    this.options = [];
    this.loading = false;
    this.errorMessage = null;
    this.state.clearState();
    this.backend.ticker = '';
    this.router.navigate(['/search']);
  }


  protected readonly facebook = faFacebookSquare;
}
