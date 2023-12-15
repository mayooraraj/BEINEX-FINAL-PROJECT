import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.scss']
})
export class HrDashboardComponent {

  constructor(private router:Router){}
  logout(){

  }
}

