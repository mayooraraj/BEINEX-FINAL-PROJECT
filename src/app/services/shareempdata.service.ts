import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareempdataService {

  //to share logged in user data

  constructor() { }  
  //service contain logined user data
  private employeeDataSubject = new BehaviorSubject<any>(null);
  employeeData$ = this.employeeDataSubject.asObservable();
  
  setEmployeeData(data: any) {
    this.employeeDataSubject.next(data);
    
  }
}
