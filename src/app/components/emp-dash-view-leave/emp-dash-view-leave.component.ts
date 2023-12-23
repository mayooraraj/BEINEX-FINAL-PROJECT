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
  //to display leave data of presesnt employee
  presentEmployees: leavemodel[] = [];

  constructor(private sharedataService:ShareempdataService,private leaveService:LeaveService){}
  
  ngOnInit(): void
   {
        //logged in employee data
        this.sharedataService.employeeData$.subscribe((data) => { 
          console.log('hiiii',data);  
          this.loggedInEmployee = data;
        });

      //to get all leave datas
      this.leaveService.getleave().subscribe(res => {
      //filter the leave of logged in employee and store in leavebackendData
      this.leaveBackendData = res.filter(e => String(e.eid) === String(this.loggedInEmployee?.id));
        console.log('loged in user leave displayed',res);
      });  
  }
}

