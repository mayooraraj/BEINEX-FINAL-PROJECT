import { NgClass } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent implements OnInit {

  employees:Employee[]; //1
  activeEmployees:number=0;
  InactiveEmployees:number=0;

  doughnutChartData ={ 
    labels:["Active","Inactive"],
    datasets:[
      {
        //data:[12,2],
       data:[(this.activeEmployees),this.InactiveEmployees],
        label:'Active and Inactive',
        fill:true,
        backgroundColor: ['rgb(105, 196, 105)', 'red'],
      }
    ]
}

  constructor(private employeeService:EmployeeService){
    this.employees =[];
  }
 
  ngOnInit(): void {

    this.employeeService.getEmployees().subscribe(res => {
      this.employees = res;

      this.activeEmployees = this.employees.filter(e => e.status === 'Active').length;
      console.log('Active Employees:', this.activeEmployees);

      this.InactiveEmployees = this.employees.filter(e => e.status === 'Inactive').length;
      console.log('Inactive Employees:', this.InactiveEmployees); 
      
      // Update the chart data after fetching employees
      this.doughnutChartData.datasets[0].data = [this.activeEmployees, this.InactiveEmployees];
    });
        
  }
}

