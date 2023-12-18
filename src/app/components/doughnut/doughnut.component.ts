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

  constructor(private employeeService:EmployeeService){
    this.employees =[];
  }
 
  ngOnInit(): void {

    this.employeeService.getEmployees().subscribe(res => {
      this.employees = res;

      const activeEmployees = this.employees.filter(e => e.status === 'Active');
      console.log('Active Employees:', activeEmployees);

      const InactiveEmployees = this.employees.filter(e => e.status === 'Inactive');
      console.log('Inactive Employees:', InactiveEmployees);


    });
    
  }
  doughnutChartData ={ 
    labels:["Active","Inactive"],
    datasets:[
      {
        data:[10,3],
        label:'Active and Inactive',
        fill:true,
        backgroundColor: ['rgb(105, 196, 105)', 'red'],
      }
    ]
  }
}

