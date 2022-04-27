import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsnRoutingModule } from './ssn-routing.module';
import { SsnComponent } from './ssn/ssn.component';


@NgModule({
  declarations: [
    SsnComponent
  ],
  imports: [
    CommonModule,
    SsnRoutingModule
  ]
})
export class SsnModule { }
