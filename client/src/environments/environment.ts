// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {CompactType, DisplayGrid, GridType} from 'angular-gridster2';

export const environment = {
    production: false,
    apiUrl: 'http://localhost:8080',
    iconPath: 'assets/icons/',
    gridOptions: {
        gridType: GridType.ScrollHorizontal,
        compactType: CompactType.None,
        margin: 10,
        outerMargin: true,
        outerMarginTop: null,
        outerMarginRight: null,
        outerMarginBottom: null,
        outerMarginLeft: null,
        mobileBreakpoint: 640,
        minCols: 100,
        maxCols: 1000,
        minRows: 100,
        maxRows: 100,
        maxItemCols: 2500,
        minItemCols: 10,
        maxItemRows: 2500,
        minItemRows: 10,
        maxItemArea: 100000,
        minItemArea: 1,
        defaultItemCols: 25,
        defaultItemRows: 30,
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
        scrollToNewItems: true
    }
};
