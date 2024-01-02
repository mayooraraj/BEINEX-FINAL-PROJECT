import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShareempdataService } from 'src/app/services/shareempdata.service';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.scss']
})
export class ProfileDisplayComponent {
  loggedInEmployee: any = {}

  constructor(private empSharedData:ShareempdataService,private router:Router){}
 
  ngOnInit(): void {
    this.empSharedData.employeeData$.subscribe((data) => { 
      this.loggedInEmployee = data;
    });
  } 
  //to navigate to edit page
  editnavigation(){
    this.router.navigate(['employee-dashboard', 'profile']);
  }
}
