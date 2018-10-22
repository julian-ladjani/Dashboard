import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {SettingEnum, SettingVariable} from '../../../objects/setting-variable';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-wigdet-settings',
    templateUrl: './wigdet-settings.component.html',
    styleUrls: ['./wigdet-settings.component.scss']
})
export class WigdetSettingsComponent implements OnInit {
    public settings: any;
    params: any;
    infos: any;
    objectKeys = Object.keys;
    controllers = new Map<String, FormControl>();
    knownTypes = ['Boolean', 'List', 'string', 'number', 'Date'];

    constructor(
        public dialogRef: MatDialogRef<WigdetSettingsComponent>,
        @Inject(MAT_DIALOG_DATA) public data: SettingVariable[], public datepipe: DatePipe) {
        this.settings = SettingEnum;
        this.params = data['params'];
        this.infos = data['infos'] ? data['infos'] : {};
    }

    checkType(elem, type) {
        if (this.params[elem] === null && type === 'number')
            return true;
        if (this.infos[elem] === undefined || this.knownTypes.indexOf(this.infos[elem]['type']) < 0)
            return (typeof this.params[elem] === type);
        return (this.infos[elem].type === type);
    }

    ngOnInit() {
        for (const infoKey in this.infos) {
            if (this.infos[infoKey]['type'] === 'List') {
                const controller = new FormControl();
                this.infos[infoKey]['filter'] = controller.valueChanges
                    .pipe(
                        startWith(''),
                        map(value => this._filter(value, this.infos[infoKey]['content']))
                    );
                this.controllers[infoKey] = controller;
            }
            if (this.infos[infoKey]['type'] === 'Date') {
                const controller = new FormControl(new Date().toISOString());
                this.controllers[infoKey] = controller;
            }
        }
    }

    onNoClick(): void {
        this.dialogRef.close({data: null});
    }

    closeWindow() {
        for (const key in this.params) {
            if (this.checkType(key, 'Date')) {
                this.params[key] = this.datepipe.transform(new Date(this.params[key]), 'yyyy-MM-dd');
            }
        }
        this.dialogRef.close({data: this.params});
    }

    private _filter(value: string, list): string[] {
        const filterValue = value.toLowerCase();

        return list.filter(option => option.toLowerCase().includes(filterValue));
    }
}
