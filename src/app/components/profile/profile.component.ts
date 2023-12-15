import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { ShareempdataService } from 'src/app/services/shareempdata.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  loggedInEmployee: Employee | undefined;

  constructor(private empSharedData:ShareempdataService){}

  ngOnInit(): void {
    this.empSharedData.employeeData$.subscribe((data) => { //new
      this.loggedInEmployee = data;
    });
  }

}
