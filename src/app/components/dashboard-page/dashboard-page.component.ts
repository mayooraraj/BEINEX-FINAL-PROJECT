import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit{
  @ViewChild('fileInput') fileInput:any; //ref variable of image in html
  @ViewChild('addEmployeeButton') addEmployeeButton:any;

  employeeForm:FormGroup;
  employees:Employee[];
  employeesToDisplay : Employee[];

  constructor(private fb:FormBuilder, private employeeService:EmployeeService,){
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
      firstname:this.fb.control(''),
      lastname:this.fb.control(''),
      birthday:this.fb.control(''),
      age:this.fb.control(''),
      gender:this.fb.control(''),
      role:this.fb.control('default'),
      phno:this.fb.control(''),
      bloodgroup:this.fb.control('default'),
      email:this.fb.control(''),
      password:this.fb.control(''),

    });
    
    this.employeeService.getEmployees().subscribe(res =>{
      for(let emp of res){
        this.employees.unshift(emp);
      }
      this.employeesToDisplay = this.employees;
      
    })
  }

  addEmployee(){
    let employee:Employee={  //employee is the class name
      firstname:this.FirstName.value,
      lastname:this.LastName.value,
      birthday:this.BirthDay.value,
      age:this.Age.value,
      gender:this.Gender.value,
      role:this.roleOptions[parseInt(this.Role.value)],
      phno:this.PhoneNumber.value,
      bloodgroup:this.BloodGroup.value,
      email:this.Email.value,
      password:this.Password.value,
      profile:this.fileInput.nativeElement.files[0]?.name, //give selected file name in array files
    }
     
    //  this.router.navigate(['/employee-detail']);
    //send the created object in backend
    this.employeeService.postEmployee(employee).subscribe((res) => {
      this.employees.unshift(res); //response is stored in employees and unshift is used instead of push to get last added at top
      this.clearForm();

    })
  }

  removeEmployee(event:any){
    this.employees.forEach((val,index) => {
      if(val.id === parseInt(event)){
        this.employeeService.deleteEmployee(event).subscribe((res) => {
          this.employees.splice(index,1);
        });
      }
    });
  }

  editEmployee(event:any){
    this.employees.forEach((val,ind) => {
      if(val.id === event){
        this.setForm(val);
      }
    })
    this.removeEmployee(event);
    this.addEmployeeButton.nativeElement.click(); 
  }  

  setForm(emp:Employee){
    this.FirstName.setValue(emp.firstname);
    this.LastName.setValue(emp.lastname);
    this.BirthDay.setValue(emp.birthday);
    this.Age.setValue(emp.age);
    this.Gender.setValue(emp.gender);

    let roleIndex = 0;
    this.roleOptions.forEach((val,index) => {
      if(val === emp.role)roleIndex = index
    })
    this.Role.setValue(roleIndex);
    this.PhoneNumber.setValue(emp.phno);
    this.BloodGroup.setValue(emp.bloodgroup);
    this.Email.setValue(emp.email);
    this.fileInput.nativeElement.value='';
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

  //add default value to all. clear the datas entered
  clearForm(){
    this.FirstName.setValue('');
    this.LastName.setValue('');
    this.BirthDay.setValue('');
    this.Age.setValue('');
    this.Gender.setValue('');
    this.Role.setValue('');
    this.PhoneNumber.setValue('');
    this.BloodGroup.setValue('');
    this.Email.setValue('');
    this.Password.setValue('');
    this.fileInput.nativeElement.value='';
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
 

}
