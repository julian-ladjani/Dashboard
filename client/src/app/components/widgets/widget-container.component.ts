import {Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {SettingVariable} from '../../objects/setting-variable';
import {MatDialog} from '@angular/material';
import {WigdetSettingsComponent} from './widget-settings/wigdet-settings.component';
import {WidgetComponent} from './widget/widget.component';
import {WidgetWrapper} from '../../objects/widget-wrapper';
import {WidgetDirective} from './widget.directive';
import {SettingsContainer} from '../../objects/settings-container';

@Component({
    selector: 'app-widget-container',
    templateUrl: './widget-container.component.html',
    styleUrls: ['./widget-container.component.scss']
})
export class WidgetContainerComponent implements OnInit {

    @Input() widget: WidgetWrapper;
    @Input() icon: String;
    @Input() title: String;
    @Input() subtitle: String;
    @Input() color: String;
    @ViewChild(WidgetDirective) widgetHost: WidgetDirective;

    private component: any;
    private data: SettingsContainer;
    constructor(public matDialog: MatDialog, private resolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
        this.loadComponent();
    }

    loadComponent() {
        const componentFactory = this.resolver.resolveComponentFactory(this.widget.component);

        const viewContainerRef = this.widgetHost.viewContainerRef;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(componentFactory);
        this.component = (<WidgetComponent>componentRef.instance);
        this.component.settings = this.widget.data;
        this.data = this.widget.data;
    }

    openSettings(): void {
        const dialogRef = this.matDialog.open(WigdetSettingsComponent, {
            data: <SettingVariable[]> JSON.parse(JSON.stringify(this.data.getSettings()))
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.component.settings.settings = result.data;
                this.widget.data.settings = result.data;
                this.data.settings = result.data;
            }
        });
    }
}