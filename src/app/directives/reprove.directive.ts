import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appReprove]',
})
export class ReproveDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#ff0033';
  }
}
