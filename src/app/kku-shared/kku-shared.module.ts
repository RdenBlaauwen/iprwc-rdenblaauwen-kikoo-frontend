import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { KkuRoutingModule } from './kku-routing.module';
import { AmountInputComponent } from './amount-input/amount-input.component';
import { FormsModule } from '@angular/forms';
import { StopEventPropagationDirective } from './stop-event-propagation.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    AmountInputComponent,
    StopEventPropagationDirective,
  ],
  exports: [
    HeaderComponent,
    AmountInputComponent,
    StopEventPropagationDirective,
  ],
  imports: [CommonModule, KkuRoutingModule, FormsModule],
})
export class KkuSharedModule {}
