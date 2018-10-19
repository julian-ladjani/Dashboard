import {Component, ComponentFactoryResolver, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {WidgetFactoryService} from '../../services/widget-factory.service';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {HttpClient} from '@angular/common/http';
import {CompactType, DisplayGrid, GridsterConfig, GridsterItem, GridType} from 'angular-gridster2';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
    widgets: Array<{ service: String, widget: String, title: String, icon: String, props: GridsterItem }> = [];
    loginService: LoginService;
    resolver: ComponentFactoryResolver;
    options: GridsterConfig;
    size = 100;

    constructor(public matDialog: MatDialog, public factory: WidgetFactoryService, private http: HttpClient, private router: Router) {
        this.loginService = new LoginService(http, router);
    }

    ngOnInit() {
        this.options = {
            gridType: GridType.Fit,
            compactType: CompactType.None,
            margin: 10,
            outerMargin: true,
            outerMarginTop: null,
            outerMarginRight: null,
            outerMarginBottom: null,
            outerMarginLeft: null,
            mobileBreakpoint: 640,
            minCols: 1,
            maxCols: 100,
            minRows: 1,
            maxRows: 100,
            maxItemCols: 100,
            minItemCols: 1,
            maxItemRows: 100,
            minItemRows: 1,
            maxItemArea: 2500,
            minItemArea: 1,
            defaultItemCols: 1,
            defaultItemRows: 1,
            fixedColWidth: 105,
            fixedRowHeight: 105,
            keepFixedHeightInMobile: false,
            keepFixedWidthInMobile: false,
            scrollSensitivity: 10,
            scrollSpeed: 20,
            enableEmptyCellClick: false,
            enableEmptyCellContextMenu: false,
            enableEmptyCellDrop: false,
            enableEmptyCellDrag: false,
            emptyCellDragMaxCols: 50,
            emptyCellDragMaxRows: 50,
            ignoreMarginInRow: false,
            draggable: {
                enabled: true,
            },
            resizable: {
                enabled: true,
            },
            swap: false,
            pushItems: true,
            disablePushOnDrag: false,
            disablePushOnResize: false,
            pushDirections: {north: true, east: true, south: true, west: true},
            pushResizeItems: false,
            displayGrid: DisplayGrid.None,
            disableWindowResize: false,
            disableWarnings: false,
            scrollToNewItems: false
        };
    }

    addWidget($event) {
        const test = $event;
        test.props = {cols: 2, rows: 2, y: 0, x: 0};
        this.widgets.push(test);
    }

    logout() {
        this.loginService.logout().then(responce => {
            if (responce['success']) {
                window.localStorage.setItem('token', '');
                this.router.navigateByUrl('/login');
            }
        });
    }
ç
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
