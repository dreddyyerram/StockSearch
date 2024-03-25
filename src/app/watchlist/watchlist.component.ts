import { Component } from '@angular/core';
import {NodeApiService} from "../node-api.service";
import {WatchlistService} from "../watchlist.service";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";
import {ALERTS, Watchlist} from "../objects";

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent {
  watchservice: WatchlistService;
  faXmark = faXmark;
  EmptyAlert = ALERTS.EmptyWatchList;

  constructor(private backend: NodeApiService, watchService: WatchlistService, private route: Router){
    this.watchservice = watchService;
  }

  ngOnInit() {
    this.watchservice.FetchWatchList();
  }

  routeToSearch(s: any){
    this.route.navigate(['/', 'search', s.ticker]);
  }

}
