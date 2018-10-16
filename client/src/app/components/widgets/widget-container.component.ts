import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {WidgetVariable} from '../../objects/widget-variable';
import {MatDialog} from '@angular/material';
import {WigdetSettingsComponent} from './widget-settings/wigdet-settings.component';
import {WidgetString} from '../../objects/widget-string';
import {WidgetInt} from '../../objects/widget-int';
import {WidgetBool} from '../../objects/widget-bool';
import {WidgetComponent} from './widget/widget.component';

@Component({
  selector: 'app-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.scss']
})
export class WidgetContainerComponent implements OnInit {
  public variables: WidgetVariable[];

    componentRef: any;
    @ViewChild('widgetcontainer', { read: ViewContainerRef }) entry: ViewContainerRef;
    constructor(public matDialog: MatDialog, private resolver: ComponentFactoryResolver) {
    this.variables = [];
    this.variables.push(new WidgetString('testString', 'I m a string'));
    this.variables.push(new WidgetInt('testInt', 42));
    this.variables.push(new WidgetBool('testBool', true));
  }

    createComponent() {
//        this.entry.clear();
        const factory = this.resolver.resolveComponentFactory(WidgetComponent);
        this.componentRef = this.entry.createComponent(factory);
    }
    destroyComponent() {
        this.componentRef.destroy();
    }

  ngOnInit() {
      this.createComponent();
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
