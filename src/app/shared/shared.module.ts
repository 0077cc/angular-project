import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';

@NgModule({
  declarations: [NotificationComponent, ModalConfirmComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
