import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-empsidebar',
  templateUrl: './empsidebar.component.html',
  styleUrls: ['./empsidebar.component.scss']
})
export class EmpsidebarComponent {
  loggedInEmployee: Employee | undefined;
  constructor( private router:Router){
    //to get loged in user data
    const state= this.router.getCurrentNavigation()?.extras.state
    this.loggedInEmployee = state?.['loggedInEmployee'];
  }
}
