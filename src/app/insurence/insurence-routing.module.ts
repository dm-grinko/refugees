import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsurenceComponent } from './insurence/insurence.component';

const routes: Routes = [
  {
    path: '',
    component: InsurenceComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsurenceRoutingModule { }
