import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  employees:Employee[]; //1

  username ="";  //property to store entered username
  password ="";   //password
  errorMsg ="";   //error msg

  constructor(private router:Router,private employeeService:EmployeeService){
    this.employees =[];
  }
  ngOnInit(): void {
    //fetch all employees added
    this.employeeService.getEmployees().subscribe((res) => {
      this.employees = res;  
    })
  }  

  login(event:Event){

    // logged in employee details stored in loginData
    const loginData =this.employees.find(e => e.email === this.username)
    
    if(this.username.trim().length === 0){ //trim remove white spaces from both ends
      this.errorMsg ="*Username is required";
    }
    else if(this.password.trim().length === 0){
      this.errorMsg = "*Password is required";
    }
    else{
      this.errorMsg ="";
      // let res = this.auth.login(this.username,this.password);
      if(this.employees.find(e => e.email === this.username && e.password === this.password)){
        localStorage.setItem('token',Math.random().toString());
        this.router.navigate(['employee-dashboard'],{state:{ loggedInEmployee: loginData }}); 
      }
      else if(this.username === 'hr' && this.password === '1234'){
        //if hr credential match create a token
        localStorage.setItem('token',Math.random().toString());
        this.router.navigate(['hr-dashboard']);
      }
      else{
        alert("Invalid Credential");
        this.username='';
        this.password='';
      }
    }
  }

}
