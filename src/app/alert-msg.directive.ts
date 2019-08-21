import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAlertMsg]'
})
export class AlertMsgDirective {

  constructor(private element:ElementRef) { }

  @HostListener('focusout') focusOut = () => {
    // console.log(this.element.nativeElement);
  }

}
