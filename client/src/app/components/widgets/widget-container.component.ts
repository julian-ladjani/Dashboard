import {Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {WidgetVariable} from '../../objects/widget-variable';
import {MatDialog} from '@angular/material';
import {WigdetSettingsComponent} from './widget-settings/wigdet-settings.component';
import {WidgetString} from '../../objects/widget-string';
import {WidgetInt} from '../../objects/widget-int';
import {WidgetBool} from '../../objects/widget-bool';
import {WidgetComponent} from './widget/widget.component';
import {WidgetItem} from './widget-item';
import {WidgetDirective} from './widget.directive';

@Component({
    selector: 'app-widget-container',
    templateUrl: './widget-container.component.html',
    styleUrls: ['./widget-container.component.scss']
})
export class WidgetContainerComponent implements OnInit {
    public variables: WidgetVariable[];
    @Input() widget: WidgetItem;
    @ViewChild(WidgetDirective) widgetHost: WidgetDirective;

    constructor(public matDialog: MatDialog, private resolver: ComponentFactoryResolver) {
        this.variables = [];
        this.variables.push(new WidgetString('testString', 'I m a string'));
        this.variables.push(new WidgetInt('testInt', 42));
        this.variables.push(new WidgetBool('testBool', true));
    }

    ngOnInit() {
        this.loadComponent();
    }

    loadComponent() {
        const componentFactory = this.resolver.resolveComponentFactory(this.widget.component);

        const viewContainerRef = this.widgetHost.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);
        //   (<WidgetComponent>componentRef.instance).data = this.widget.data;
    }

    addVariable(widgetVariable: WidgetVariable) {
        this.variables.push(widgetVariable);
    }

    getValue(name: string) {
        this.variables.forEach(function (value) {
            if (value.name === name) {
                return value;
            }
        });
        return null;
    }

    openSettings(): void {
        const dialogRef = this.matDialog.open(WigdetSettingsComponent, {
            width: '250px',
            data: this.variables
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.variables = result;
            }
        });
    }
}
