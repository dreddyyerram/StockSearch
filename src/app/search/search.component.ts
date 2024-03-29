import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, UrlSegment} from '@angular/router';
import {FormControl} from '@angular/forms';
import {NodeApiService} from "../node-api.service";
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import {AutoSearchResult, ALERTS} from "../objects";
import {faXmark, faSearch} from "@fortawesome/free-solid-svg-icons";
import {StateService} from "../state.service";
import {debounce, debounceTime, filter, finalize, switchMap, tap} from "rxjs";
import {MatAutocompleteTrigger} from "@angular/material/autocomplete";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: []
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
  @ViewChild(MatAutocompleteTrigger) autocompleteTrigger!: MatAutocompleteTrigger;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private backend: NodeApiService,
              private state: StateService) {
    this.options = [];
    let curr_path = this.route.snapshot.url.map((s: UrlSegment) => s.path).join('/');
    if(curr_path.includes('search/home')){
      this.state.clearState();
    }
    this.route.params.subscribe(params => {
      if(params){
        this.ticker = params['ticker']?.toUpperCase() || '';
        if (this.ticker !== this.tickerInput){
          this.options = [];
          this.tickerInput = this.ticker.toUpperCase();
          this.backend.ticker = this.tickerInput.toUpperCase();
        }
      }
    });
  }

  ngOnInit() {
    this.errorMessage = null;
    // this.myControl.valueChanges.pipe(debounceTime(350),
    //   tap(() => (this.loading = true)), switchMap((value:string | null) =>
    //     this.backend.getSearchList(value? value : '').then(finalize(() => (
    //       this.loading = false))))).subscribe((data: any) => (
    //         this.options = data.result.filter((option: any) => {
    //           return !option.symbol.includes('.');
    //         })));


    // this.myControl.valueChanges.subscribe(value => {
    //   if (value === '' || value === null || value === undefined){
    //     this.options = [];
    //     this.loading = false;
    //   }
    //   else{
    //     this.tickerInput = value;
    //     this.backend.ticker = this.tickerInput;
    //     this.loading = true;
    //     this.options = [];
    //     this.backend.getSearchList(value).then((data: AutoSearchResult) => {
    //       this.loading = false;
    //       this.options = data.result.filter((option: any) => {
    //         return !option.symbol.includes('.');});
    //     });
    //   }});

    // Increment the call ID for each new request
    let latestCallId = 0;
    this.myControl.valueChanges.subscribe(value => {
      if (value === '' || value === null || value === undefined) {
        this.options = [];
        this.loading = false;
      } else {
        // Increment the call ID for each new request
        const currentCallId = ++latestCallId;
        this.tickerInput = value;
        this.backend.ticker = this.tickerInput;
        this.loading = true;
        this.options = [];
        this.backend.getSearchList(value).then((data: AutoSearchResult) => {
          // Only process the response if the current call ID matches the latest
          if (currentCallId === latestCallId) {
            this.loading = false;
            this.options = data.result.filter((option: any) => !option.symbol.includes('.'));
          }
          // If the call IDs don't match, it means this response is outdated. Do nothing.
        });
      }
    });

    // this.myControl.valueChanges
    //   .pipe(
    //     // Debounce the input by 300ms
    //     debounceTime(300),
    //     // Filter out empty or null values
    //     filter(value => value !== null && value !== undefined),
    //     // Use switchMap to cancel previous requests and keep only the latest
    //     switchMap(value => {
    //       this.tickerInput = value || '';
    //       this.backend.ticker = this.tickerInput;
    //       this.loading = true;
    //       this.options = [];
    //       return this.backend.getSearchList(value||'')
    //     })
    //   )
    //   .subscribe({
    //     next: (data: AutoSearchResult) => {
    //       this.loading = false;
    //       this.options = data.result.filter((option: any) => !option.symbol.includes('.'));
    //     },
    //     error: (error) => {
    //       // Handle any errors
    //       this.loading = false;
    //       console.error('Error fetching search results:', error);
    //     }
    //   });

    }

  onEnter(){
    this.options = [];
    this.loading = false;
    if (this.tickerInput === ""){
      this.errorMessage = ALERTS.InvalidTicker;
      return;
    }
    this.autocompleteTrigger.closePanel();
    this.router.navigate(['/search', this.tickerInput.toUpperCase()]);
  }

  reset(){
    this.tickerInput = '';
    this.options = [];
    this.loading = false;
    this.errorMessage = null;
    this.backend.ticker = '';
    this.router.navigate(['/search']);
  }


  protected readonly facebook = faFacebookSquare;
}
