import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AssignedComponent } from './assigned/assigned.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { TmsLoaderComponent } from './tms-loader/tms-loader.component';
import { UnassignedComponent } from './unassigned/unassigned.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  { path: 'employee', component: EmployeeComponent },
  { path: 'assigned', component: AssignedComponent },
  { path: 'unassigned', component: UnassignedComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'loader', component: TmsLoaderComponent },
  { path: '**', component: AdminComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [AdminComponent, EmployeeComponent, AssignedComponent,UnassignedComponent]
