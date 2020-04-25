import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appApprove]',
})
export class ApproveDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#00cc00';
  }
}
