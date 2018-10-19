import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {WigdetSettingsComponent} from './widget-settings/wigdet-settings.component';
import {WidgetComponent} from './widget/widget.component';
import {WidgetDirective} from './widget.directive';
import {ApiService} from '../../services/api.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {timer, Subscription} from 'rxjs';

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

    private api: ApiService;
    constructor(public matDialog: MatDialog, private resolver: ComponentFactoryResolver, private http: HttpClient, private router: Router) {
        this.api = new ApiService(http, router);
    }

    ngOnInit() {
        this.loadComponent();
        this.updateTimer();
    }

    getWidgetUrl() {
        return '/' + this.component.getServiceLabel() + '/' + this.component.getWidgetLabel() + '/' + this.component.settings.id;
    }

    updateTimer() {
        const time = this.component.settings.params['timer'] * 1000;
        if (time > 0) {
            timer(time).subscribe(val => this.updateTimer());
        }
        this.updateComponent();
    }

    updateComponent() {
        this.api.getWidget(this.component.settings, this.getWidgetUrl());
    }

    loadComponent() {
        const componentFactory = this.resolver.resolveComponentFactory(this.widget);

        const viewContainerRef = this.widgetHost.viewContainerRef;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(componentFactory);
        this.component = (<WidgetComponent>componentRef.instance);
    }

    openSettings(): void {
        const dialogRef = this.matDialog.open(WigdetSettingsComponent, {
            data: {...this.component.settings.params}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.component.settings.params = result.data;
                this.api.postWidget(this.component.settings, this.widget.getServiceLabel(),
                    this.widget.getWidgetLabel());
                this.updateTimer();
            }
        });
    }
}