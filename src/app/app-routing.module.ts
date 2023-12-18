import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { HrDashboardComponent } from './components/hr-dashboard/hr-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { LeaveapplicaionComponent } from './components/leaveapplicaion/leaveapplicaion.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ViewleaveComponent } from './components/viewleave/viewleave.component';
import { EmpDashViewLeaveComponent } from './components/emp-dash-view-leave/emp-dash-view-leave.component';
import { BarchartComponent } from './components/barchart/barchart.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'addemployee',component:DashboardPageComponent},
  {path:'employee-detail',component:EmployeeDetailComponent},
  {path:'bar-chart',component:BarchartComponent},
  {path:'view-leave',component:ViewleaveComponent},
  {
    path:'employee-dashboard',component:EmployeeDashboardComponent,
    children:[
      {path:'leave-form',component:LeaveapplicaionComponent},
      {path:'dashboard',component:DashboardPageComponent},
      {path:'profile',component:ProfileComponent},
      {path:'emp-dash-viewleave',component:EmpDashViewLeaveComponent},
     
    ]
  },
  {path:'hr-dashboard',component:HrDashboardComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
