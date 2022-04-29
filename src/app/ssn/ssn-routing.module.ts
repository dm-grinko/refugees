import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SsnComponent } from './ssn/ssn.component';

const routes: Routes = [
  {
    path: '',
    component: SsnComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SsnRoutingModule { }
