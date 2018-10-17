import { Type } from '@angular/core';
import {SettingsContainer} from './settings-container';

export class WidgetWrapper {
    constructor(public component: Type<any>, public data: SettingsContainer) {}
}