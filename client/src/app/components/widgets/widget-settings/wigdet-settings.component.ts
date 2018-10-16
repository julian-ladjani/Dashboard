import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {SettingVariable} from '../../../objects/setting-variable';

@Component({
  selector: 'app-wigdet-settings',
  templateUrl: './wigdet-settings.component.html',
  styleUrls: ['./wigdet-settings.component.scss']
})
export class WigdetSettingsComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<WigdetSettingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SettingVariable[]) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
      this.dialogRef.close({data: null});
  }
  closeWindow() {
      this.dialogRef.close({data: this.data});
  }
}
