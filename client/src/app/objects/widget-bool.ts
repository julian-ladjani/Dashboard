import {WidgetVariable} from './widget-variable';

export class WidgetBool extends WidgetVariable {
    constructor(name: string, value: boolean) {
        super(name, 'Boolean', value);
    }
}