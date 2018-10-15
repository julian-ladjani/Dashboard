import {WidgetVariable} from './widget-variable';

export class WidgetInt extends WidgetVariable {
    constructor(name: string, value: number) {
        super(name, 'Integer', value);
    }
}
