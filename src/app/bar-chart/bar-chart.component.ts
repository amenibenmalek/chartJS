import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }
  public barChartLabel = ['2006','2007','2008','2010','2020']
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [ 
    { data: [30,45,56,34,34] ,label: 'Series A'},
    { data: [20, 35, 66, 84, 64], label: 'Series B' } 
  ];

  constructor() { }

  ngOnInit() {
  }

}
