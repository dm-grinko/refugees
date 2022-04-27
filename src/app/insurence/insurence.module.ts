import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsurenceRoutingModule } from './insurence-routing.module';
import { InsurenceComponent } from './insurence/insurence.component';


@NgModule({
  declarations: [
    InsurenceComponent
  ],
  imports: [
    CommonModule,
    InsurenceRoutingModule
  ]
})
export class InsurenceModule { }
