import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {SettingEnum, SettingVariable} from '../../../objects/setting-variable';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

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
    myControl = new FormControl();

    constructor(
        public dialogRef: MatDialogRef<WigdetSettingsComponent>,
        @Inject(MAT_DIALOG_DATA) public data: SettingVariable[]) {
        this.settings = SettingEnum;
        this.params = data['params'];
        this.infos = data['infos'] ? data['infos'] : {};
        console.log(data);
    }

    checkType(elem, type) {
        if (this.params[elem] === null && type === 'number')
            return true;
        if (this.infos[elem] === undefined)
            return (typeof this.params[elem] === type);
        return (this.infos[elem].type === type);
    }

    ngOnInit() {
        for (const infoKey in this.infos) {
            if (this.infos[infoKey]['type'] === 'List') {
                this.infos[infoKey].filter = this.myControl.valueChanges
                    .pipe(
                        startWith(''),
                        map(value => this._filter(value, this.infos[infoKey]['content']))
                    );
            }
        }
    }

    onNoClick(): void {
        this.dialogRef.close({data: null});
    }

    closeWindow() {
        this.dialogRef.close({data: this.params});
    }

    private _filter(value: string, list): string[] {
        const filterValue = value.toLowerCase();

        return list.filter(option => option.toLowerCase().includes(filterValue));
    }
}
