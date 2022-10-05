import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TmsMangerComponent } from './tms-manger/tms-manger.component';
import { TMSRoutingModule } from './tms-routing.module';



@NgModule({
  declarations: [ TmsMangerComponent],
  imports: [CommonModule,TMSRoutingModule],
  exports: []
})

export class TMSModule { }
