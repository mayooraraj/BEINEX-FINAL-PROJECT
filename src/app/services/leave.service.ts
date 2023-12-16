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

  postleave(data:leavemodel){
    return this.http.post<leavemodel>(this.leaveurl,data);
  }

  //leave
  getleave(){
    return this.http.get<leavemodel[]>(this.leaveurl)
  }

  rejectleave(id:string){
    return this.http.delete(this.leaveurl + '/' + id)
  }

  approveLeave(id:string,employee:leavemodel){
    return this.http.put(this.leaveurl + '/' + id, employee);
  }

  

}
