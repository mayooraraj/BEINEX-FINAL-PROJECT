import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    this.employeeleaveDisplay=this.employeeleave;
    this.leaveForm = fb.group({});
    
  }

  ngOnInit(): void {
    this.leaveForm=this.fb.group({
      eid:this.fb.control(''),
      name:this.fb.control(''),
      startdate:this.fb.control('',Validators.required),
      enddate:this.fb.control('',Validators.required),
      reason:this.fb.control('',Validators.required),
    })

    //to get leave datas from back end
    this.leaveService.getleave().subscribe(res => {
      // console.log(res);
      
    })

    //to get logined employee data
    this.empSharedData.employeeData$.subscribe((data) => { //new
      this.loggedInEmployee = data;

      //to set employee id and name in the form controls
      this.leaveForm.get('name')?.setValue(`${this.loggedInEmployee?.firstname} ${this.loggedInEmployee?.lastname}`);
      this.leaveForm.get('eid')?.setValue(this.loggedInEmployee?.id);
    });
   
  }

  //apply button click function
  applyemployeeleave(){

    if (!this.StartDate.value || !this.EndDate.value || !this.Reason.value) {
      alert("Please fill in all the required fields");
      return; // Do not proceed with submission if validation fails
    }

    let data:leavemodel ={
      name:this.Name.value,
      eid:this.Id.value,
      startdate:this.StartDate.value,
      enddate:this.EndDate.value,
      reason:this.Reason.value,
      status:'pending',
    };
    this.leaveService.postleave(data).subscribe((res) => {
        this.employeeleave.unshift(res);
    })
    alert("Leave Requested Successfully");
    this.router.navigate(['employee-dashboard', 'emp-dash-viewleave']);
    this.StartDate.setValue('');
    this.EndDate.setValue('');
    this.Reason.setValue('');
    
  }

  //to access controls
    public get Name():FormControl {
      return this.leaveForm.get('name') as FormControl;
    }
    public get Id():FormControl {
      return this.leaveForm.get('eid') as FormControl;
    }
    public get StartDate():FormControl {
      return this.leaveForm.get('startdate') as FormControl;
    }
    public get EndDate():FormControl {
      return this.leaveForm.get('enddate') as FormControl;
    }
    public get Reason():FormControl {
      return this.leaveForm.get('reason') as FormControl;
    }
   
   
}
