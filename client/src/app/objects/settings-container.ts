import {SettingVariable} from './setting-variable';

export class SettingsContainer {
    private _settings: [SettingVariable];

    constructor(settings: [SettingVariable]) {
        this._settings = settings;
    }

    get settings(): [SettingVariable] {
        return this._settings;
    }

    set settings(value: [SettingVariable]) {
        this._settings = value;
    }

    addVariable(widgetVariable: SettingVariable) {
        this._settings.push(widgetVariable);
    }

    getValue(name: string) {
        this.settings.forEach(function (value) {
            if (value.name === name) {
                return value;
            }
        });
        return null;
    }
}