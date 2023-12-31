import { Component } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent {

  lineChartData ={ 
    labels:["sun","mon","tue","wed","thu","fri","sat"],
    datasets:[
      {
        data:[0,2,1,2,0,1,3],
        label:'Leaves Taken By Employees',
        fill:true,
        backgroundColor: ['red'],
      }
    ]
  }
}
