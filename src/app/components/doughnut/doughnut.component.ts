import { Component, OnInit} from '@angular/core';
import {Chart , registerables} from 'node_modules/chart.js';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
Chart.register(...registerables);


@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent implements OnInit {
  //to store active and inactive count to display as text
  activecount:number=0;
  inactivecount:number=0;
 
  employees:Employee[];
  constructor(private service:EmployeeService){
    this.employees =[];
  }
  
  chartdata:any;

  activedata:any[]=[];
  inactivedata:any[]=[];

  ngOnInit(): void {
    //to get employee datas and stored the response in employees
    this.service.getEmployees().subscribe(res => {
      this.employees= res;
      
      if(this.employees!=null)
      {
          //to get active employees
          this.activedata.push( this.employees.filter(e => e.status === 'Active').length); 
          this.activecount =this.employees.filter(e => e.status === 'Active').length;
           //to get inactive employees
          this.inactivedata.push(this.employees.filter(e => e.status === 'Inactive').length);
          this.inactivecount = this.employees.filter(e => e.status === 'Inactive').length; 
      }
        this.RenderChart(this.activedata,this.inactivedata,'doughnut','dochart');
      }
    ) 
  }
  RenderChart(activedata:any,inactivedata:any,type:any,id:any){

    const myChart = new Chart(id, {
      type: type,
      data: {
        labels:["Active","Inactive"] ,
        datasets: [{
          label: '# of Votes',
          data: [this.activedata,this.inactivedata],
          backgroundColor:['rgb(144, 238, 144)',' rgb(254,111,94)'],
          borderWidth: 10
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
}

