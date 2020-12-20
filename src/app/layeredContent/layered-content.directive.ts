import { Directive, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLayeredContent]',
})
export class LayeredContentDirective {
  constructor(private renderer: Renderer2) {}
}
