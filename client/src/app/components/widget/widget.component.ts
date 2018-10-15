import { Component, OnInit } from '@angular/core';
import {WidgetVariable} from '../../objects/widget-variable';
import {MatDialog} from '@angular/material';
import {WigdetSettingsComponent} from './widget-settings/wigdet-settings.component';
import {WidgetString} from '../../objects/widget-string';
import {WidgetInt} from '../../objects/widget-int';
import {WidgetBool} from '../../objects/widget-bool';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  public variables: WidgetVariable[];

  constructor(public matDialog: MatDialog) {
    this.variables = [];
    this.variables.push(new WidgetString('testString', 'I m a string'));
    this.variables.push(new WidgetInt('testInt', 42));
    this.variables.push(new WidgetBool('testBool', true));
  }

  ngOnInit() {
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
