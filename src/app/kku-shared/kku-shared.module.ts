import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KkuRoutingModule } from './kku-routing.module';
import { AmountInputComponent } from './amount-input/amount-input.component';
import { FormsModule } from '@angular/forms';
import { StopEventPropagationDirective } from './stop-event-propagation.directive';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    AmountInputComponent,
    StopEventPropagationDirective,
    NotificationsComponent,
  ],
  exports: [
    AmountInputComponent,
    StopEventPropagationDirective,
    NotificationsComponent,
  ],
  imports: [CommonModule, KkuRoutingModule, FormsModule],
})
export class KkuSharedModule {}
