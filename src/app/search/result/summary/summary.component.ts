import {Component, Input, OnChanges, TemplateRef} from '@angular/core';
import { OnInit } from '@angular/core';
import {Recommendation, StockDetails, StockQuote, ChartResponse, Peers, News} from '../../../objects'
import * as highcharts1 from 'highcharts/highstock';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit, OnChanges{
  @Input() stock_details !: StockDetails;
  @Input() stock_quote !: StockQuote;
  @Input() marketOpen !: boolean;
  @Input() trend !: Recommendation;
  @Input() peers !: Peers;
  @Input() chart !: ChartResponse;
  chartOptions: any;
  high_charts = highcharts1;

  constructor() {
  }

  CalculateTickPositions(data: number[][]): Array<number>{
    let tickPositions = [];
    let min = this.chart.results[0].t;
    let max = this.chart.results[this.chart.results.length - 1].t;
    let diff = max - min;
    let ticks = 5;
    let interval = diff / ticks;
    for (let i = 0; i < ticks; i++){
      tickPositions.push(min + i * interval);
    }
    tickPositions.push(max);
    return tickPositions;
  }

  ngOnInit() {
  }

  ngOnChanges(): void {
    if (this.chart && this.chart.results){
      this.createChart(this.chart);
    }
  }

  createChart(chart: ChartResponse){
    let data1: number[][] = this.chart.results.map((d: { t: any; c: any; }) => [d.t, d.c]);
    this.chartOptions = {
      chart: {
        type: 'line',
        backgroundColor: 'transparent',
      },
      rangeSelector: {
        enabled: false
      },
      navigator: {
        enabled: false
      },
      legend:{ enabled:false},
      title:{
        enabled: false,
        text: null
      },
      subtitle: {
        useHtml: true,
        text: `<b style="color: #939292" >${this.stock_details.ticker} Hourly Price Variation</b>`,
      },
      yAxis: {
        title: {
          text: null
        },
        mainGridLineWidth: 0,
        minorGridLineColor: '#f0f0f0',
        showLastLabel: false,
        labels: {
          align: 'right',
          y: -2,
          x: 0,
          style: {
            fontSize: 'x-small',
          }
        },
        opposite: true
      },
      xAxis: {
        // tickPositioner(this:any) {
        //   this.tickPositions.shift();
        //   this.tickPositions.pop();
        //   return [data1[0][0], ...this.tickPositions, data1[data1.length - 1][0]]
        // },
        type: 'datetime',
        // dateTimeLabelFormats : {
        //   day: '%b. %e',
        //   hour: '%H:%M',
        // },
      },
      series: [{
        type: 'line',
        name: this.stock_details.ticker,
        data: data1,
        color: this.marketOpen ? 'green' : 'red',
        tooltip: {
          valueDecimals: 2
        }
      }]
    };
  }


}
