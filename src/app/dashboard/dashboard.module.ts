import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './init';

import { RoutingModule } from './routing.module';

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
  ]
})
export class DashboardModule { }
