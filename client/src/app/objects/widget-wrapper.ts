import { Type } from '@angular/core';

export class WidgetWrapper {
    constructor(public component: Type<any>, public data: any) {}
}