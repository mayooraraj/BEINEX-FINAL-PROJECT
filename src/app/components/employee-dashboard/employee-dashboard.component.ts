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
  constructor( private router:Router, private empSharedData:ShareempdataService)
  {
    //to get loged in user data
    //retrieve the state property from the navigation extras using ?
      const state= this.router.getCurrentNavigation()?.extras.state
      //safely access the state object and retrieve the value of the 'loggedInEmployee' 
      this.loggedInEmployee = state?.['loggedInEmployee'];
  }

  ngOnInit(): void {
    this.empSharedData.setEmployeeData(this.loggedInEmployee);
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
