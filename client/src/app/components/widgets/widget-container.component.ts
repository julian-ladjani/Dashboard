import {
    Component,
    ComponentFactoryResolver, ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import {MatDialog} from '@angular/material';
import {WigdetSettingsComponent} from './widget-settings/wigdet-settings.component';
import {WidgetComponent} from './widget/widget.component';
import {WidgetDirective} from './widget.directive';
import {ApiService} from '../../services/api.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {SettingsContainer} from '../../objects/settings-container';
import {timer, Subscription} from 'rxjs';
import $ from 'jquery';

@Component({
    selector: 'app-widget-container',
    templateUrl: './widget-container.component.html',
    styleUrls: ['./widget-container.component.scss']
})
export class WidgetContainerComponent implements OnInit, OnChanges {

    @Input() widget: any;
    @Input() color: String;
    @Input() settings: SettingsContainer;
    @Input() delete: boolean;

    @Output() deleteMe = new EventEmitter<string>();

    @ViewChild(WidgetDirective) widgetHost: WidgetDirective;

    private component: any;
    private icon: string;
    private title: string;
    private subtitle: string;
    private timerSubscription: Subscription = null;
    private connectInfos: {
        ok: any,
        connection: any,
        ko: any
    } = {ok: null, connection: null, ko: null};

    private api: ApiService;

    constructor(public matDialog: MatDialog, private resolver: ComponentFactoryResolver, private http: HttpClient, private router: Router, private el: ElementRef) {
        this.connectInfos['ok'] = {color: 'primary', icon: 'check_circle'};
        this.connectInfos['connection'] = {color: 'accent', icon: 'lens'};
        this.connectInfos['ko'] = {color: 'warn', icon: 'error'};
        this.api = new ApiService(http, router);
    }

    ngOnInit() {
        this.loadComponent();
        console.log(this.settings);
        this.component.settings.id = this.settings.id;
        if (this.settings.infos)
            this.component.settings.infos = this.settings.infos;
        if (Object.keys(this.settings.params).length > 2)
            this.component.settings.params = this.settings.params;
        this.component.settings.params.grid = this.settings.params.grid;
        this.component.settings.params.timer = this.settings.params.timer;
        this.updateTimer();
        this.icon = this.widget.getIcon();
        this.title = this.widget.getServiceLabel();
        this.subtitle = this.widget.getTitle();
    }

    ngOnChanges(change: SimpleChanges) {
        if (this.delete === true) {
            this.deleteWidget();
        }
    }

    cardSize() {
        if ($(this.el.nativeElement).find('.db-heading').width() < 250) {
            return true;
        }
        return false;
    }

    getWidgetUrl() {
        return '/' + this.widget.getServiceLabel() + '/' + this.widget.getWidgetLabel() + '/' + this.component.settings.id;
    }

    updateTimer() {
        const time = this.component.settings.params['timer'] * 1000;
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
        if (time > 0) {
            this.timerSubscription = timer(time).subscribe(val => this.updateTimer());
        }
        this.updateComponent();
    }

    updateComponent() {
        if (this.component.settings.id.length !== 0) {
            this.api.getWidget(this.component.settings, this.getWidgetUrl());
        }
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

    deleteWidget() {
        if (this.component.settings.id.length === 0) {
            this.settings.id = 'deleteMe';
            this.delete = true;
            this.deleteMe.emit(this.settings.id);
            return;
        }
        this.api.deleteWidget(this.getWidgetUrl(), this.component.settings).then(response => {
            if (response['success'] === true) {
                this.settings.id = this.component.settings.id;
                this.deleteMe.emit(this.component.settings.id);
            }
        });
    }
}