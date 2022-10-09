import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TmsMangerComponent } from './tms-manger/tms-manger.component';
import { TMSRoutingModule } from './tms-routing.module';
import { SecurityComponent } from './tms-manger/security/security.component';



@NgModule({
  declarations: [ TmsMangerComponent, SecurityComponent],
  imports: [CommonModule,TMSRoutingModule],
  exports: []
})

export class TMSModule { }
