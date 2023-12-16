import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareempdataService {

  constructor() { }
  
  //service contain logined user data

  private employeeDataSubject = new BehaviorSubject<any>(null);
  employeeData$ = this.employeeDataSubject.asObservable();

  setEmployeeData(data: any) {
    this.employeeDataSubject.next(data);
    
  }
}
