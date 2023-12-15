import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { leavemodel } from 'src/app/models/leave';
import { LeaveService } from 'src/app/services/leave.service';
import { ShareempdataService } from 'src/app/services/shareempdata.service';

@Component({
  selector: 'app-leaveapplicaion',
  templateUrl: './leaveapplicaion.component.html',
  styleUrls: ['./leaveapplicaion.component.scss']
})
export class LeaveapplicaionComponent {
 
  employeeleave:leavemodel[]= [];  //store back end data
  employeeleaveDisplay:leavemodel[];
  leaveForm : FormGroup;
  loggedInEmployee: Employee | undefined;

  constructor(private router:Router,private leaveService:LeaveService,private fb:FormBuilder,private empSharedData:ShareempdataService ){
    // const state= this.router.getCurrentNavigation()?.extras.state
    this.employeeleaveDisplay=this.employeeleave;
    //   console.log(state);
    this.leaveForm = fb.group({});
    // const state= this.router.getCurrentNavigation()?.extras.state
    // console.log(state);
    // this.loggedInEmployee = state?.['loggedInEmployee'];
    //console.log('lreave',this.loggedInEmployee);

  }

  ngOnInit(): void {
    this.leaveForm=this.fb.group({
      eid:this.fb.control(''),
      name:this.fb.control(''),
      startdate:this.fb.control(''),
      enddate:this.fb.control(''),
      reason:this.fb.control(''),
    })

    //to get leave datas from back end
    this.leaveService.getleave().subscribe(res => {
      console.log(res);
      
    })


    //to get logined employee data
    this.empSharedData.employeeData$.subscribe((data) => { //new
      this.loggedInEmployee = data;
    });
  }

  //to access controls
    public get Name():FormControl {
      return this.leaveForm.get('name') as FormControl;
    }
   
}
