export class SettingVariable {
    constructor(
        public name: string,
        public type: string,
        public value: any
    ) {}
}

export class SettingString extends SettingVariable {
    constructor(name: string, value: string) {
        super(name, 'String', value);
    }
}

export class SettingBool extends SettingVariable {
    constructor(name: string, value: boolean) {
        super(name, 'Boolean', value);
    }
}

export class SettingInt extends SettingVariable {
    constructor(name: string, value: number) {
        super(name, 'Integer', value);
    }
}
