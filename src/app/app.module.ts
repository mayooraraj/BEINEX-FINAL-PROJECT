import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//material ui
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { HrDashboardComponent } from './components/hr-dashboard/hr-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { EmpsidebarComponent } from './components/empsidebar/empsidebar.component';
import { LeaveapplicaionComponent } from './components/leaveapplicaion/leaveapplicaion.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ViewleaveComponent } from './components/viewleave/viewleave.component';
import { EmpDashViewLeaveComponent } from './components/emp-dash-view-leave/emp-dash-view-leave.component';
import { BarchartComponent } from './components/barchart/barchart.component';
import { NgChartsModule } from 'ng2-charts';
import { DoughnutComponent } from './components/doughnut/doughnut.component';
import { CardViewleaveComponent } from './components/card-viewleave/card-viewleave.component';
import { ProfileDisplayComponent } from './components/profile-display/profile-display.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    EmployeeDetailComponent,
    EmployeeDashboardComponent,
    HrDashboardComponent,
    LoginComponent,
    EmpsidebarComponent,
    LeaveapplicaionComponent,
    ProfileComponent,
    ViewleaveComponent,
    EmpDashViewLeaveComponent,
    BarchartComponent,
    DoughnutComponent,
    CardViewleaveComponent,
    ProfileDisplayComponent,
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    NgChartsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
