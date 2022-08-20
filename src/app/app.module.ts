import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { AssignedComponent } from './assigned/assigned.component';
import { UnassignedComponent } from './unassigned/unassigned.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './admin/list/list.component';
import { TmsLoaderComponent } from './tms-loader/tms-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    AssignedComponent,
    UnassignedComponent,
    DashboardComponent,
    ListComponent,
    TmsLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
