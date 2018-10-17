export enum SettingEnum {
    GET = 1,
    POST = 2
}

export class SettingVariable {
    constructor(
        public name: string,
        public type: string,
        public value: any,
        public config: SettingEnum
    ) {}
}

export class SettingString extends SettingVariable {
    constructor(name: string, value: string, config: SettingEnum) {
        super(name, 'String', value, config);
    }
}

export class SettingBool extends SettingVariable {
    constructor(name: string, value: boolean, config: SettingEnum) {
        super(name, 'Boolean', value, config);
    }
}

export class SettingInt extends SettingVariable {
    constructor(name: string, value: number, config: SettingEnum) {
        super(name, 'Integer', value, config);
    }
}
