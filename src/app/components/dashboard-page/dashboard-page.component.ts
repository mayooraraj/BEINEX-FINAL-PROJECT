import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { LeaveService } from 'src/app/services/leave.service';
import { leavemodel } from 'src/app/models/leave';
import { CardViewleaveComponent } from '../card-viewleave/card-viewleave.component';
import { CardViewleaveService } from 'src/app/services/card-viewleave.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit{
  @ViewChild('fileInput') fileInput:any; //ref variable of image in html is accessed
  @ViewChild('addEmployeeButton') addEmployeeButton:any;

  employeeForm:FormGroup;
  employees:Employee[];
  employeesToDisplay : Employee[];

  //to store leave data
  leaveData:leavemodel[]=[];

  constructor(private fb:FormBuilder, private employeeService:EmployeeService,private router:Router,private leaveService:LeaveService, private ViewleaveService:CardViewleaveService){
    this.employeeForm = fb.group({});
    this.employees =[]; //initialise employees as empty array
    this.employeesToDisplay = this.employees;
  }

  roleOptions = [
    'System analyst',
    'web developer',
    'web designer',
    'quality tester',
    'java developer'
  ];

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstname:this.fb.control('',Validators.required),
      lastname:this.fb.control('',Validators.required),
      birthday:this.fb.control('',Validators.required),
      age:this.fb.control('',Validators.required),
      gender:this.fb.control('',Validators.required),
      status:this.fb.control('default',Validators.required),
      role:this.fb.control('default',Validators.required),
      phno:this.fb.control('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      bloodgroup:this.fb.control('default',Validators.required),
      email:this.fb.control('',[Validators.required, Validators.email]),
      password:this.fb.control('',Validators.required),
    });
    this.employeeService.getEmployees().subscribe(res =>{
      for(let emp of res){
        this.employees.unshift(emp);
      }
      this.employeesToDisplay = this.employees;  
    })
  }

  //function for insert button
  addEmployee(){
    if (
      !this.FirstName.value ||
      !this.LastName.value ||
      !this.BirthDay.value ||
      !this.Age.value ||
      !this.Gender.value ||
      !this.Status.value ||
      !this.Role.value ||
      !this.PhoneNumber.value ||
      !this.BloodGroup.value ||
      !this.Email.value ||
      !this.Password.value ||
      !this.fileInput.nativeElement.files[0]
    ) {
      alert("Please fill in all the required fields");
      return; // Do not proceed with submission if validation fails
    }

    let employee:Employee={  //employee is the class name
      firstname:this.FirstName.value,
      lastname:this.LastName.value,
      birthday:this.BirthDay.value,
      age:this.Age.value,
      gender:this.Gender.value,
      status:this.Status.value,
      role:this.roleOptions[parseInt(this.Role.value)], //map value obtained from i/p field to arrray
      phno:this.PhoneNumber.value,
      bloodgroup:this.BloodGroup.value,
      email:this.Email.value,
      password:this.Password.value,
      profile:this.fileInput.nativeElement.files[0]?.name, //give selected file name in array files
    }
     alert('Employee Added Successfully')
    //send the created object in backend
    this.employeeService.postEmployee(employee).subscribe((res) => {
    this.employees.unshift(res); //response is stored at front of array
    this.clearForm();
    })
  }

   //add default value to all. clear the datas entered
  clearForm(){
    this.FirstName.setValue('');
    this.LastName.setValue('');
    this.BirthDay.setValue('');
    this.Age.setValue('');
    this.Gender.setValue('');
    this.Status.setValue('');
    this.Role.setValue('');
    this.PhoneNumber.setValue('');
    this.BloodGroup.setValue('');
    this.Email.setValue('');
    this.Password.setValue('');
    this.fileInput.nativeElement.value='';
}


  removeEmployee(event:any){
    const confirmation = confirm('Are you sure?');
    // window confirm return true or false
    if(confirmation){
    this.employees.forEach((val,index) => {
      
      if(val.id === parseInt(event)){
        this.employeeService.deleteEmployee(event).subscribe((res) => {
          this.employees.splice(index,1);
        });
      }
    });
  }
  }

  editEmployee(event:any){
    this.employees.forEach((val,ind) => {
      if(val.id === event){
        this.setForm(val); //employee data set to the form
      }
    })
    this.removeEmployee(event); //delete existing employee data 
    this.addEmployeeButton.nativeElement.click(); //to trigger modal form
  }  

  setForm(emp:Employee){
    this.FirstName.setValue(emp.firstname);
    this.LastName.setValue(emp.lastname);
    this.BirthDay.setValue(emp.birthday);
    this.Age.setValue(emp.age);
    this.Gender.setValue(emp.gender);
    this.Status.setValue(emp.status);
    let roleIndex = 0;
    this.roleOptions.forEach((val,index) => {
      if(val === emp.role)roleIndex = index
    })
    this.Role.setValue(roleIndex);
    this.PhoneNumber.setValue(emp.phno);
    this.BloodGroup.setValue(emp.bloodgroup);
    this.Email.setValue(emp.email);
    this.Password.setValue(emp.password);
    this.fileInput.nativeElement.value='';
    
    }

     //to view employee leave
  viewLeave(event:any){
    this.router.navigate(['card-leave']);
     //to get all leave datas
     this.leaveService.getleave().subscribe(res => {
      //filter the leave of the employee
      this.leaveData = res.filter(e => String(e.eid) === String(event));
      //to send leave details in service so that it can display in another component
      this.ViewleaveService.showleave(this.leaveData);
      }); 
     

  }

    searchEmployees(event:any){
      let filteredEmployees : Employee[] =[];

      if(event === ''){
        this.employeesToDisplay = this.employees;
      }else{
        filteredEmployees = this.employees.filter((val,index) => {
          let targetkey = val.firstname.toLowerCase() + '' + val.lastname. toLowerCase();
          let searchKey = event.toLowerCase();
          return targetkey.includes(searchKey)
        });
        this.employeesToDisplay = filteredEmployees;
      }
    }

 
  //to access controls
  public get FirstName():FormControl {
    return this.employeeForm.get('firstname') as FormControl;
  }
  public get LastName():FormControl {
    return this.employeeForm.get('lastname') as FormControl;
  }
  public get BirthDay():FormControl {
    return this.employeeForm.get('birthday') as FormControl;
  }
  public get Age():FormControl {
    return this.employeeForm.get('age') as FormControl;
  }
  public get Gender():FormControl {
    return this.employeeForm.get('gender') as FormControl;
  }
  public get Role():FormControl {
    return this.employeeForm.get('role') as FormControl;
  }
  public get PhoneNumber():FormControl {
    return this.employeeForm.get('phno') as FormControl;
  }
  public get BloodGroup():FormControl {
    return this.employeeForm.get('bloodgroup') as FormControl;
  }
  public get Email():FormControl {
    return this.employeeForm.get('email') as FormControl;
  }
  public get Password():FormControl {
    return this.employeeForm.get('password') as FormControl;
  }
 public get Status():FormControl {
  return this.employeeForm.get('status') as FormControl;
 }

}
