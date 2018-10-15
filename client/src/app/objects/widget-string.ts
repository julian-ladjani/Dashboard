import {WidgetVariable} from './widget-variable';

export class WidgetString extends WidgetVariable {
    constructor(name: string, value: string) {
        super(name, 'String', value);
    }
}
