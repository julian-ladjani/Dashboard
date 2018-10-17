import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {SettingVariable} from '../../objects/setting-variable';
import {MatDialog} from '@angular/material';
import {WigdetSettingsComponent} from './widget-settings/wigdet-settings.component';
import {WidgetComponent} from './widget/widget.component';
import {WidgetWrapper} from '../../objects/widget-wrapper';
import {WidgetDirective} from './widget.directive';
import {SettingsContainer} from '../../objects/settings-container';
import {ApiService} from '../../services/api.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
    selector: 'app-widget-container',
    templateUrl: './widget-container.component.html',
    styleUrls: ['./widget-container.component.scss']
})
export class WidgetContainerComponent implements OnInit {

    @Input() widget: any;
    @Input() icon: String;
    @Input() title: String;
    @Input() subtitle: String;
    @Input() color: String;
    @ViewChild(WidgetDirective) widgetHost: WidgetDirective;

    private component: any;
    private data: SettingsContainer;
    private api: ApiService;
    constructor(public matDialog: MatDialog, private resolver: ComponentFactoryResolver, private http: HttpClient, private router: Router) {
        this.api = new ApiService(http, router);
    }

    ngOnInit() {
        this.loadComponent();
    }

    loadComponent() {
        const componentFactory = this.resolver.resolveComponentFactory(this.widget);

        const viewContainerRef = this.widgetHost.viewContainerRef;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(componentFactory);
        this.component = (<WidgetComponent>componentRef.instance);
//        this.component.params = this.widget.settings.params;
        this.data = this.component.settings.params;
    }

    openSettings(): void {
        const dialogRef = this.matDialog.open(WigdetSettingsComponent, {
            data: <any> JSON.parse(JSON.stringify(this.data))
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.component.settings.params = result.data;
                this.data = result.data;
                this.api.postWidget(this.data, Object.getPrototypeOf(this.widget).getServiceLabel(),
                    Object.getPrototypeOf(this.widget).getWidgetLabel());
            }
        });
    }
}