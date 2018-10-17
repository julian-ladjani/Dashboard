export class SettingsContainer {
    get params(): any {
        return this._params;
    }

    private _params: any;
    private _infos: any;

    constructor(params: any = null, infos: any = null) {
        this._params = params;
        this._infos = infos;
    }

    set params(value: any) {
        this._params = value;
    }

    addVariable(variable: any) {
        this._params.push(variable);
    }
}