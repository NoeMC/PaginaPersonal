import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartType, RadialChartOptions,  ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';



@Component({
  selector: 'app-radar-habilidad',
  templateUrl: './radar-habilidad.component.html',
  styleUrls: ['./radar-habilidad.component.css']
})
export class RadarHabilidadComponent implements OnInit {

// Radar
public radarChartOptions: ChartOptions = {
  responsive: true,
  scale: {
    ticks:{
      suggestedMin: 10,
      suggestedMax:100
    }
  }
};
public radarChartLabels: Label[] = ['HTML5', 'CSS3', 'JavaScript', 'Angular9', 'PHP', 'Spring-Java', 'NodeJs'];

public radarChartData: ChartDataSets[] = [
  { data: [85, 70, 70, 75, 60, 50, 80], label: 'Teoria' },
  { data: [85, 55, 80, 85, 50, 40, 85], label: 'Practica' }
];
public radarChartType: ChartType = 'radar';
public radarChartColors: Color[] = [
  {
    borderColor: 'green',
    backgroundColor: 'rgba(37, 233, 70, 0.28)',
  },
];

constructor() { }

ngOnInit() {
}

// events
public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

}
