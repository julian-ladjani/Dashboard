import {Component, ComponentFactoryResolver, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {WidgetFactoryService} from '../../services/widget-factory.service';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {HttpClient} from '@angular/common/http';
import {CompactType, DisplayGrid, GridsterConfig, GridsterItem, GridType} from 'angular-gridster2';
import {SettingsContainer} from '../../objects/settings-container';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
    widgets: Array<{ service: String, widget: String, title: String, icon: String, props: GridsterItem, settings: SettingsContainer, delete: boolean}> = [];
    loginService: LoginService;
    resolver: ComponentFactoryResolver;
    options: GridsterConfig;
    size = 100;

    constructor(public matDialog: MatDialog, public factory: WidgetFactoryService, private http: HttpClient, private router: Router) {
        this.loginService = new LoginService(http, router);
    }

    ngOnInit() {
        this.options = environment.gridOptions;
        this.loginService.apiGet().then(services => {
            for (const serviceKey in services) {
                const service = services[serviceKey];
                for (const widgetKey in service) {
                    const widgets = service[widgetKey];
                    for (const widgetIdx in widgets) {
                        const widget = widgets[widgetIdx];
                        const setting = new SettingsContainer(widget.params, widget.infos);
                        setting.id = widget.id;
                        setting.connected = true;
                        const infos = {service: serviceKey, widget: widgetKey, title: widgetKey, icon: '', settings: setting};
                        this.addWidget(infos, setting);
                    }
                }
            }
        });
    }

    addWidget($event, settings: SettingsContainer = new SettingsContainer()) {
        const test = $event;
        test.settings = settings;
        test.delete = false;
        this.widgets.push(test);
        console.log(this.widgets.length);
    }

    deleteWidgets() {
        this.widgets.forEach(function (value) {
            value.delete = true;
        });
    }

    logout() {
        this.loginService.logout().then(response => {
                window.localStorage.setItem('token', '');
                this.router.navigateByUrl('/login');
        });
    }

    deleteWidget($event) {
        const index = this.widgets.findIndex(x => x.settings.id === $event);
        if (index > -1) {
            this.widgets.splice(index, 1);
        }
    }

    changedOptions() {
        this.options.api.optionsChanged();
    }

    resize(expand) {
        if (expand === true) {
            this.size += 20;
        } else if (this.size > 100) {
            this.size -= 20;
        }
    }
}
