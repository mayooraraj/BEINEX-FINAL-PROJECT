import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardViewleaveService {

  constructor() { }  
  //service contain employee leave
  private employeeleave = new BehaviorSubject<any>(null);
  personalleavedata = this.employeeleave.asObservable();
  
  showleave(data: any) {
    this.employeeleave.next(data);
    
  }
}
