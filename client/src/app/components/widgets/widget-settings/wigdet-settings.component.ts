import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {WidgetVariable} from '../../../objects/widget-variable';

@Component({
  selector: 'app-wigdet-settings',
  templateUrl: './wigdet-settings.component.html',
  styleUrls: ['./wigdet-settings.component.scss']
})
export class WigdetSettingsComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<WigdetSettingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WidgetVariable[]) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
      this.dialogRef.close({data: null});
  }
  couille() {
    console.log(this.data);
      this.dialogRef.close({data: this.data});
  }
}
