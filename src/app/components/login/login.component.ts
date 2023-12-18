import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
// import { AuthService } from 'src/app/services/auth.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  employees:Employee[]; //1

  username ="";
  password ="";
  errorMsg ="";

  constructor(private router:Router,private employeeService:EmployeeService){
    this.employees =[];
  }
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((res) => {
      this.employees = res;
      // console.log(this.employees);
       
    })
  }
  
  login(event:Event){

    console.log("Username:", this.username);
    console.log("Password:", this.password);

    const loginData =this.employees.find(e => e.firstname === this.username)
    // console.log(loginData);
    

    if(this.username.trim().length === 0){ //trim remove white spaces from both end
      this.errorMsg ="*Username is required";
    }else if(this.password.trim().length === 0){
      this.errorMsg = "*Password is required";
    }
    else{
      this.errorMsg ="";
      // let res = this.auth.login(this.username,this.password);
      if(this.employees.find(e => e.firstname === this.username && e.password === this.password)){
        localStorage.setItem('token',Math.random().toString());
        this.router.navigate(['employee-dashboard'],{state:{ loggedInEmployee: loginData }}); //n
      }
      else if(this.username === 'hr' && this.password === '1234'){
        //if hr credential match create a token
        localStorage.setItem('token',Math.random().toString());
        this.router.navigate(['hr-dashboard']);
      }
      else{
        alert("Invalid Credential");
      }
    }
  }

}
