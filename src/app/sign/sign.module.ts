import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class SignModule { }
