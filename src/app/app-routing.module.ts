import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AssignedComponent } from './assigned/assigned.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { UnassignedComponent } from './unassigned/unassigned.component';


const routes : Routes = [
  {path: 'admin', component: AdminComponent},
  {path:'employee', component:EmployeeComponent},
  {path:'assigned', component:AssignedComponent},
  {path:'unassigned', component:UnassignedComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'**', component:AdminComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [AdminComponent, EmployeeComponent]
