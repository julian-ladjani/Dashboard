export class SettingsContainer {

    set id(value: string) {
        this._id = value;
    }

    get id(): string {
        return this._id;
    }

    get connected(): boolean {
        return this._connected;
    }

    set connected(value: boolean) {
        this._connected = value;
    }

    get params(): any {
        return this._params;
    }

    get infos(): any {
        return this._infos;
    }

    private _connected = false;
    private _id = '';
    private _params: any;
    private _infos: any;

    constructor(params: any = null, infos: any = null) {
        const commonParams = {timer: 5, grid: {cols: 0, rows: 0, y: 1, x: 1}};
        this._params = {...commonParams, ...params};
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