import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './core/main-layout/main-layout.component';
import { p404Component } from './core/404/404.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
  {
    path: 'ssn',
    component: MainLayoutComponent,
    children: [
      {
        path: '**',
        loadChildren: () => import('./ssn/ssn.module').then((m) => m.SsnModule),
      },
    ],
  },
  {
    path: 'insurence',
    component: MainLayoutComponent,
    children: [
      {
        path: '**',
        loadChildren: () =>
          import('./insurence/insurence.module').then((m) => m.InsurenceModule),
      },
    ],
  },
  {
    path: 'car',
    component: MainLayoutComponent,
    children: [
      {
        path: '**',
        loadChildren: () => import('./car/car.module').then((m) => m.CarModule),
      },
    ],
  },
  {
    path: 'food',
    component: MainLayoutComponent,
    children: [
      {
        path: '**',
        loadChildren: () =>
          import('./food/food.module').then((m) => m.FoodModule),
      },
    ],
  },
  {
    path: 'bank',
    component: MainLayoutComponent,
    children: [
      {
        path: '**',
        loadChildren: () =>
          import('./bank/bank.module').then((m) => m.BankModule),
      },
    ],
  },
  {
    path: 'work',
    component: MainLayoutComponent,
    children: [
      {
        path: '**',
        loadChildren: () =>
          import('./work/work.module').then((m) => m.WorkModule),
      },
    ],
  },
  { path: '404', component: p404Component },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
