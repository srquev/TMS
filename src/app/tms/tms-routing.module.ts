import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TmsMangerComponent } from './tms-manger/tms-manger.component';


/*
The path here is set to an empty string because the path in AppRoutingModule is already set to customers, 
so this route in the CustomersRoutingModule, is already within the customers context. 
Every route in this routing module is a child route.
*/
const tmsRoute: Routes = [
    {
        path: '',
        component: TmsMangerComponent
    }

]

@NgModule({
    imports: [RouterModule.forChild(tmsRoute)],
    exports: [RouterModule]
})

export class TMSRoutingModule { }