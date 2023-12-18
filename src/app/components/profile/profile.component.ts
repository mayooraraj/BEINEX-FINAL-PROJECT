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
  roleOptions = [
    'hr',
    'employee',
    
  ];

 

  // loggedInEmployee: Employee | undefined ;
  loggedInEmployee: any = {}

  constructor(private empSharedData:ShareempdataService,private employeeData:EmployeeService){
    
  }

  ngOnInit(): void {
    this.empSharedData.employeeData$.subscribe((data) => { //new
      this.loggedInEmployee = data;
    });
  }

  
  //to edit profile

  onempDataChanged(event: Event): void {
    // Access the changed value
    // const changedValue = (event.target as HTMLInputElement).value;
    //this.loggedInEmployee[(event.target as HTMLInputElement).name] = (event.target as HTMLInputElement).value


    if (this.loggedInEmployee) {
      // Safely access and update the property
      this.loggedInEmployee[(event.target as HTMLInputElement).name] = (event.target as HTMLInputElement).value;
    console.log(this.loggedInEmployee);
    
    }
   // console.log('Employee ID changed:', changedValue);
    // You can perform additional actions based on the changed value
  }

  editEmpProfile(){
    this.employeeData.editEmployee(this.loggedInEmployee.id,this.loggedInEmployee).subscribe((res) => {
      console.log('updated the employee profile',res);
      
    })
    confirm("Profile Edit Successfully")
    console.log('cliocked');
    
  }

}
