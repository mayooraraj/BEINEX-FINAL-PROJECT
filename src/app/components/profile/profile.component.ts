import { Component, OnInit } from '@angular/core';

import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { ShareempdataService } from 'src/app/services/shareempdata.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  // loggedInEmployee: Employee | undefined ;
  loggedInEmployee: any = {}

  constructor(private empSharedData:ShareempdataService,private employeeservice:EmployeeService){}
 
  ngOnInit(): void {
    this.empSharedData.employeeData$.subscribe((data) => { //new
      this.loggedInEmployee = data;
    });
  } 
  //this mwthod is triggered whenever the user type something in input field
  onempDataChanged(event: Event): void
   { 
    if (this.loggedInEmployee) {
      // Safely access and update the property based on input elements name
      this.loggedInEmployee[(event.target as HTMLInputElement).name] = (event.target as HTMLInputElement).value;
      console.log('updatedddddddddddd',this.loggedInEmployee);
    
    }
  }
  //for the employee to edit personal data 
  editEmpProfile()
  {
    this.employeeservice.editEmployee(this.loggedInEmployee.id,this.loggedInEmployee).subscribe((res) => {
      console.log('updated the employee profile',res);   
    })
    confirm("Profile Edit Successfully")
    console.log('cliocked');   
  }
}
