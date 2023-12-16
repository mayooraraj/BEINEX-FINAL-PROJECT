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
    // console.log('employee display',this.employeeleaveDisplay);
    
  }

  ngOnInit(): void {
     
    this.leaveService.getleave().subscribe((res) => {
    //  console.log('leave data',res);
      this.employeeleaveDisplay =res;
      // for(let j of res){
      //   this.employeeleave.push(j);
      // }
      // this.employeeleaveDisplay = this.employeeleave;
      
    })
    this.employeeService.getEmployees().subscribe((res) => {
      this.employees = res;
      // console.log(this.employees);
       
    })
  }

  approveleave(leaveId: any){
    console.log(leaveId);

    if(leaveId){
     const approvedData:any = this.employeeleaveDisplay.find(e => e.id === leaveId);
     approvedData.status = 'approved';

     this.leaveService.approveLeave(leaveId,approvedData).subscribe((res) => {
      console.log('leave approves',res);
      
    })
    }
    
    alert("Leave Approved");
  }

  rejectleave(){
    alert("Leave rejected");
  }
}
