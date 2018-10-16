import {Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {SettingVariable} from '../../objects/setting-variable';
import {MatDialog} from '@angular/material';
import {WigdetSettingsComponent} from './widget-settings/wigdet-settings.component';
import {WidgetComponent} from './widget/widget.component';
import {WidgetWrapper} from '../../objects/widget-wrapper';
import {WidgetDirective} from './widget.directive';

@Component({
    selector: 'app-widget-container',
    templateUrl: './widget-container.component.html',
    styleUrls: ['./widget-container.component.scss']
})
export class WidgetContainerComponent implements OnInit {

    @Input() widget: WidgetWrapper;
    @ViewChild(WidgetDirective) widgetHost: WidgetDirective;

    private component: any;
    private data: any;
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
            width: '250px',
            data: <[WidgetWrapper]> JSON.parse(JSON.stringify(this.data))
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            if (result) {
//                this.widget.data = result.data;
                this.component.settings = result.data;
                this.widget.data = result.data;
                this.data = <[WidgetWrapper]> JSON.parse(JSON.stringify(result.data));
                console.log('Data From : ', this.data[0]);
            }
        });
    }
}

/*addVariable(widgetVariable: WidgetVariable) {
    this.widget.data.push(widgetVariable);
}

getValue(name: string) {
    this.widget.data.forEach(function (value) {
        if (value.name === name) {
            return value;
        }
    });
    return null;
}*/