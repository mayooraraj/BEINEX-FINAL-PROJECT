import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  @Input() employee:Employee; //to access employee data from parent
  @Output() onRemoveEmployee = new EventEmitter<number>();
  @Output() onEditEmployee = new EventEmitter<number>();
  @Output() onViewLeave =  new EventEmitter<number>();

  constructor(){
    this.employee ={
      firstname: '',
      lastname: '',
      birthday: '',
      age:'',
      role:'',
      gender:'',
      phno:'',
      bloodgroup:'',
      email: '',
      password:'',
      profile:'',
    } 
  }

  ngOnInit(): void {
    console.log(this.employee);
    
  }

  deleteEmployeeClicked(){
    this.onRemoveEmployee.emit(this.employee.id);
  }

 editEmployeeClicked(){
    this.onEditEmployee.emit(this.employee.id);
 }
 viewLeave(){
  this.onViewLeave.emit(this.employee.id);
 }


}