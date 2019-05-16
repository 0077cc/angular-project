import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class RoutingModule { }
