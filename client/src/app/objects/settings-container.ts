export class SettingsContainer {
    get params(): any {
        return this._params;
    }
    get infos(): any {
        return this._infos;
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

    set infos(value: any) {
        this._infos = value;
    }

    addVariable(variable: any) {
        this._params.push(variable);
    }
}