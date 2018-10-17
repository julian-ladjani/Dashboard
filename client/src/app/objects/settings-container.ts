import {SettingVariable} from './setting-variable';

export class SettingsContainer {
    private _settings: SettingVariable[];

    constructor(settings: SettingVariable[] = null) {
        this._settings = settings;
    }

    getSettings() {
        return this._settings;
    }

    set settings(value: SettingVariable[]) {
        this._settings = value;
    }

    addVariable(variable: SettingVariable) {
        this._settings.push(variable);
    }

    getValue(name: string) {
        this._settings.forEach(function (value) {
            if (value.name === name) {
                return value.value;
            }
        });
        return null;
    }
}