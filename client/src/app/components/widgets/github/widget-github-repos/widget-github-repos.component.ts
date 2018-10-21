import {Component, Input, OnInit} from '@angular/core';
import {EpitechComponent} from '../../epitech/epitech-component';
import {SettingsContainer} from '../../../../objects/settings-container';
import {GithubComponent} from '../github-component';

@Component({
  selector: 'app-widget-github-repos',
  templateUrl: './widget-github-repos.component.html',
  styleUrls: ['./widget-github-repos.component.scss']
})
export class WidgetGithubReposComponent extends GithubComponent implements OnInit {

    constructor() {
        super();
    }

    static getTitle() {
        return 'Repositories';
    }

    static getWidgetLabel() {
        return 'repos';
    }

    @Input() settings: SettingsContainer = new SettingsContainer(
        {token: '', user: 'yannicksuc'},
        {}
    );

    ngOnInit() {
    }
