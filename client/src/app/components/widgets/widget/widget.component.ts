import {Component, Input, OnInit} from '@angular/core';
import {SettingVariable} from '../../../objects/setting-variable';
import {SettingsContainer} from '../../../objects/settings-container';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
    constructor() { }

    @Input() settings: SettingVariable[];

    static getSettings() {
        return [new SettingVariable('Message', 'String', 'Hello world !')];
    }

    ngOnInit() {
    }
}
