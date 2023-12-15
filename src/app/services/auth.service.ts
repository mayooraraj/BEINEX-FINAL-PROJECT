import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private hrCredentials = { username: 'hr', password: '1234' };
  // private employeeCredentials = { username: 'employee', password: '5678' };


  // constructor(private router:Router) { }
  // login(uname:string,pword:string){
  //   if (uname === this.hrCredentials.username && pword === this.hrCredentials.password) {
  //     return 200; // HR login successful
  //   } else if (uname === this.employeeCredentials.username && pword === this.employeeCredentials.password) {
  //     return 201; // Employee login successful
  //   } else {
  //     return 403; // Invalid credentials
  //   }
  // }
}
