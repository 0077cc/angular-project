import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'sign',
    loadChildren: './sign/sign.module#SignModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
