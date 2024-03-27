import {Component, Input, OnChanges} from '@angular/core';
import { InsiderResponse, Recommendation} from "src/app/objects";
import { OnInit } from '@angular/core';
import * as highcharts1 from 'highcharts/highstock';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit, OnChanges{
  @Input() Insiders !: InsiderResponse;
  @Input() Recommendations !: Recommendation;
  @Input() Earnings !: any;
  @Input() stock_details !: any;
  insiderData: any = {};
  historyChartOptions: any;
  recomChartOptions: any;
  highcharts = highcharts1;

  constructor() {}



  ngOnInit() {

  }

  setupInsiderData(){
    let posMSPRList: number[] = this.Insiders.data.filter((d:any) => d.mspr >= 0);
    let negMSPRList: number[] = this.Insiders.data.filter((d:any) => d.mspr < 0);
    let posChangeList: number[] = this.Insiders.data.filter((d:any) => d.change >= 0);
    let negChangeList: number[] = this.Insiders.data.filter((d:any) => d.change < 0);

    this.insiderData = {
      symbol: this.Insiders.symbol,
      totalMSPR: this.Insiders.data.reduce((acc:any, d:any) => acc + d.mspr, 0).toFixed(2),
      totalChange: this.Insiders.data.reduce((acc:any, d:any) => acc + d.change, 0).toFixed(2),
      posMSPR: posMSPRList.reduce((acc:any, d:any) => acc + d.mspr, 0).toFixed(2),
      negMSPR: negMSPRList.reduce((acc:any, d:any) => acc + d.mspr, 0).toFixed(2),
      posChange: posChangeList.reduce((acc:any, d:any) => acc + d.change, 0).toFixed(2),
      negChange: negChangeList.reduce((acc:any, d:any) => acc + d.change, 0).toFixed(2)
    };
  }

  ngOnChanges(): void {
    if(this.Insiders){
      this.setupInsiderData();
    }
    if (this.Recommendations){
      this.createRecomChart(this.Recommendations);
    }
    if (this.Earnings){
      this.createHistoryChart(this.Earnings);
    }
  }


  createRecomChart(data: any){
    this.recomChartOptions = {
      chart: {
        type: 'column',
        backgroundColor: '#f8f8f8',
        style:{
          fontSize: "small"
        }
      },
      title: {
        text: '<span class="h6 fw-medium">Recommendation Trends<span>',
        useHTML: true
      },
      xAxis: {
        categories: data.map((d: { period: string | any[]; }) => d.period.slice(0,-3)),
      },
      yAxis: {
        min: 0,
        title: {
          text: '#Analysis'
        },
      },
      legend: {
        verticalAlign: 'bottom',
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true
          }
        }
      },
      exporting: {
        enabled: false
      },
      series: [{
        name: 'Strong Buy',
        data: data.map((d: { strongBuy: any; }) => d.strongBuy),
        color: "#197c42",
      }, {
        name: 'Buy',
        data: data.map((d: { buy: any; }) => d.buy),
        color: "#21c15e",
      }, {
        name: 'Hold',
        data: data.map((d: { hold: any; }) => d.hold),
        color: "#c2961f"
      }, {
        name: 'Sell',
        data: data.map((d: { sell: any; }) => d.sell),
        color: "#f66566"
      }, {
        name: 'Strong Sell',
        data: data.map((d: { strongSell: any; }) => d.strongSell),
        color: "#8b3736"
      }]
    }

  }


  createHistoryChart(data: any){
    let x_labels = data.map((x: any) => [x.period, `Suprise: ${x.surprise}`]);
    let minEstimate = Math.min(...data.map((x: any) => x.estimate));
    let minActual = Math.min(...data.map((x: any) => x.actual));
    let totalMin = Math.min(minEstimate, minActual);

    this.historyChartOptions = {
      title: {
        text: 'Historical EPS Surprises'
      },
      chart: {
        type: 'spline',
        backgroundColor: '#f8f8f8',
        style:{
          fontSize: "small"
        },
        events: {
          load: function (this: any) {
            // Draw a line after the chart has been rendered
            let labelYPosition = this.xAxis[0].labelGroup.element.getBBox().y;
            const legendYPosition = this.legend.group.alignAttr.translateY;
            const x1 = this.plotLeft;
            const x2 = this.plotLeft + this.plotWidth;
            const y = labelYPosition + (legendYPosition - labelYPosition);
            // Render the line
            this.renderer.path(['M', x1, y, 'L', x2, y])
              .attr({
                'stroke-width': 1,
                stroke: 'black'
              })
              .add();
          }
        }
      },
      xAxis: {
        categories: x_labels,
        labels: {
          formatter: function(this: any) {
            return `<span>${this.value[0]}</span><br><span>${this.value[1]}</span>`
          },
          tickLength: 10,
        }
      },
      yAxis: {
        title: {
          text: 'Quarterly EPS'
        },
        min: totalMin,
      },
      tooltip: {
        shared: true,
        crosshairs: false,
        formatter: function (this:any) {
          return this.points.reduce(function (s: any, point:any) {
            return s + '<br/><span style="color:' + point.series.color + ';">\u25CF </span>' + point.series.name + ': <b>' + point.y + '</b>';
          }, '<p style="font-size: x-small">'+ this.x[0] + "<br/>" + this.x[1] + '</P>');
        },
        valueDecimals: 2,
      },
      series: [
        {
        name: 'Actual',
        type:'spline',
        data: data.map((x: any) => x.actual),
        color: '#30b8fd'
      },
        {
        name: 'Estimate',
        type:'spline',
        data: data.map((x: any) => x.estimate),
        color: '#625ac8'
      }]
    };
  }

}
