import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[kku-stop-event-propagation]',
})
export class StopEventPropagationDirective {
  //TODO: add property to change event name
  @HostListener('change', ['$event'])
  public onClick(event: any): void {
    event.stopPropagation();
  }
}
