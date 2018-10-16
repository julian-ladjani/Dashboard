import {SettingVariable} from './setting-variable';

export class WidgetString extends SettingVariable {
    constructor(name: string, value: string) {
        super(name, 'String', value);
    }
}
