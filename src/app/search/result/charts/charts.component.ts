import {Component, OnChanges, OnInit} from '@angular/core';
import { Input } from '@angular/core';
import { ChartResponse } from 'src/app/objects';
import * as highcharts1 from 'highcharts/highstock';
import vbp from 'highcharts/indicators/volume-by-price';
import indicators from 'highcharts/indicators/indicators';

indicators(highcharts1);
vbp(highcharts1);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit, OnChanges{
  @Input() chartData: ChartResponse | any;
  protected readonly high_charts = highcharts1;
  chartOptions: any;

  ngOnInit() {
  }
  ngOnChanges(): void {
    if (this.chartData){
      this.createChart(this.chartData);
    }
  }

  createChart(chart: ChartResponse){
    const volume = chart.results.map((d: { t: any; v: any; }) => [d.t, d.v]);
    const ohlc = chart.results.map((d: { t: any; o: any; h: any, l: any, c: any}) => [d.t, d.o, d.h, d.l, d.c]);

    this.chartOptions = {
      rangeSelector: {
        selected: 2
      },
      title: {
        text: `${chart.ticker} Historical`
      },
      subtitle: {
        text: 'With SMA and Volume by Price technical indicators'
      },

      yAxis: [{
        startOnTick: false,
        endOnTick: false,
        labels: {
          align: 'right',
          x: -3
        },
        title: {
          text: 'OHLC'
        },
        height: '60%',
        lineWidth: 2,
        resize: {
          enabled: true
        }
      }, {
        labels: {
          align: 'right',
          x: -3
        },
        title: {
          text: 'Volume'
        },
        top: '65%',
        height: '35%',
        offset: 0,
        lineWidth: 2
      }],

      tooltip: {
        split: true
      },

      plotOptions: {
        /*             series: {
                        dataGrouping: {
                            units: groupingUnits
                        }
                    } */
      },

      series: [{
        type: 'candlestick',
        name: chart.ticker,
        id: chart.ticker.toLowerCase(),
        zIndex: 2,
        data: ohlc
      }, {
        type: 'column',
        name: 'Volume',
        id: 'volume',
        data: volume,
        yAxis: 1
      }, {
        type: 'vbp',
        linkedTo: chart.ticker.toLowerCase(),
        params: {
          volumeSeriesID: 'volume'
        },
        dataLabels: {
          enabled: false
        },
        zoneLines: {
          enabled: false
        }
      }, {
        type: 'sma',
        linkedTo: chart.ticker.toLowerCase(),
        zIndex: 1,
        marker: {
          enabled: false
        }
      }]
    }
  }

}

