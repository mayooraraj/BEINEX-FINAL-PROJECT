import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { leavemodel } from 'src/app/models/leave';
import { EmployeeService } from 'src/app/services/employee.service';
import { LeaveService } from 'src/app/services/leave.service';
import { ShareempdataService } from 'src/app/services/shareempdata.service';

@Component({
  selector: 'app-viewleave',
  templateUrl: './viewleave.component.html',
  styleUrls: ['./viewleave.component.scss']
})
export class ViewleaveComponent implements OnInit {

  employeeleave:leavemodel[]= [];  //store leave data back end 
  employeeleaveDisplay:leavemodel[];
  employees:Employee[]=[];

  constructor(private leaveService:LeaveService,private employeeService:EmployeeService ){
    this.employeeleaveDisplay=this.employeeleave;
  }

  ngOnInit(): void {
     
    this.leaveService.getleave().subscribe((res) => {
      for(let j of res){
        this.employeeleave.unshift(j);
      }
      this.employeeleaveDisplay = this.employeeleave;
      
    })
    this.employeeService.getEmployees().subscribe((res) => {
      this.employees = res;  
    })
  }
  //approve button
  approveleave(leaveId: any)
  {
    console.log(leaveId);
    alert("Leave Approved");

    if(leaveId){
     const approvedData:any = this.employeeleaveDisplay.find(e => e.id === leaveId);
     approvedData.status = 'approved';
     //req to server to update the status
     this.leaveService.approveLeave(leaveId,approvedData).subscribe((res) => {
      console.log('leave approved',res);})
  
      //to remove from leave list when button clicked
      // const approvedDataIndex = this.employeeleaveDisplay.findIndex(e => e.id === leaveId);
      //   if (approvedDataIndex !== -1) {
      //       this.employeeleaveDisplay.splice(approvedDataIndex, 1);
        
      //   }
  }
}

  rejectedleave(leaveId: any){

    alert("Leave rejected");
       
         const rejectedData:any = this.employeeleaveDisplay.find(e => e.id === leaveId);
        rejectedData.status = 'Rejected'; 
        
        this.leaveService.rejectleave(leaveId,rejectedData).subscribe((res) => {
        console.log('leave rejected',res);})

        //to remove from leave list when button clicked
        const approvedDataIndex = this.employeeleaveDisplay.findIndex(e => e.id === leaveId);
         if (approvedDataIndex !== -1)
      {
         this.employeeleaveDisplay.splice(approvedDataIndex, 1);
      }
     }
  }
  

