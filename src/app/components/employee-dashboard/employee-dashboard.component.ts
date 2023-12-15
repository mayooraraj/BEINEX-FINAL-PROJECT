import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { ShareempdataService } from 'src/app/services/shareempdata.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit{
  loggedInEmployee: Employee | undefined;
  constructor( private router:Router, private empSharedData:ShareempdataService){

    //to get loged in user data
    const state= this.router.getCurrentNavigation()?.extras.state
      console.log(state);
      this.loggedInEmployee = state?.['loggedInEmployee'];
      console.log(this.loggedInEmployee);
  }

  ngOnInit(): void {
    this.empSharedData.setEmployeeData(this.loggedInEmployee);
  }
}
