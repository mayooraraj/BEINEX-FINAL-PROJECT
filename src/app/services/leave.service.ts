import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { leavemodel } from '../models/leave';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private http:HttpClient) { }

  leaveurl ='http://localhost:3000/comments';

  //apply leave

  applyleave(data:leavemodel){
    return this.http.post<leavemodel>(this.leaveurl,data);
  }

  //leave
  getleave(){
    return this.http.get<leavemodel[]>(this.leaveurl)
  }

}
