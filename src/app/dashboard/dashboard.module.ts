import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './init';

import { RoutingModule } from './routing.module';

import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    RoutingModule
  ],
  exports: [
    ...COMPONENTS
  ],
  providers: [
    UserService
  ]
})
export class DashboardModule { }
