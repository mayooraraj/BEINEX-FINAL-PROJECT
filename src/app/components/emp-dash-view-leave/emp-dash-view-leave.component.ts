import { Component, OnInit, PipeTransform } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { leavemodel } from 'src/app/models/leave';
import { LeaveService } from 'src/app/services/leave.service';
import { ShareempdataService } from 'src/app/services/shareempdata.service';

@Component({
  selector: 'app-emp-dash-view-leave',
  templateUrl: './emp-dash-view-leave.component.html',
  styleUrls: ['./emp-dash-view-leave.component.scss']
})
export class EmpDashViewLeaveComponent implements OnInit {

  leaveBackendData:leavemodel[]=[];

  loggedInEmployee: Employee | undefined;

  // employeeeName:any;

  //to display leave data of presesnt employee

    presentEmployees: leavemodel[] = [];


  constructor(private empSharedData:ShareempdataService,private leaveService:LeaveService){
    
  }

  ngOnInit(): void {


      //logged in employee data
      this.empSharedData.employeeData$.subscribe((data) => { //new
        console.log('hiiii',data);
        
        this.loggedInEmployee = data;
      });


    //leave server data

    this.leaveService.getleave().subscribe(res => {
      this.leaveBackendData = res.filter(e => String(e.eid) === String(this.loggedInEmployee?.id));
    //  this.employeeeName=this.loggedInEmployee?.firstname;
      console.log(res);
    });
   
    

  }

 check(){
  
  if(this.leaveBackendData.filter(e => String(e.eid) === String(this.loggedInEmployee?.id))){
    alert("present");
 }




 console.log("clicked",this.leaveBackendData, this.loggedInEmployee);
 }

// check() {
//   if (this.loggedInEmployee?.id !== undefined) {
//     const hasLeave = this.leaveBackendData.some(e => e.eid === this.loggedInEmployee?.id);
//     if (hasLeave) {
//       // Employee has leave
//       console.log('Employee has leave');
//       // You can add further logic here
//     } else {
//       // Employee does not have leave
//       console.log('Employee does not have leave');
//       // You can add further logic here
//     }
//   }
// }

  


}

