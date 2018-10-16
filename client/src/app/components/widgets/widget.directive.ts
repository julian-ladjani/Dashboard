import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appWidgetHost]'
})
export class WidgetDirective {

    constructor(public viewContainerRef: ViewContainerRef) { }
}
