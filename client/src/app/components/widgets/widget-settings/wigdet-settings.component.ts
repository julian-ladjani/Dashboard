import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {SettingEnum, SettingVariable} from '../../../objects/setting-variable';

@Component({
  selector: 'app-wigdet-settings',
  templateUrl: './wigdet-settings.component.html',
  styleUrls: ['./wigdet-settings.component.scss']
})
export class WigdetSettingsComponent implements OnInit {
  public settings: any;

  constructor(
    public dialogRef: MatDialogRef<WigdetSettingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SettingVariable[]) {
      this.settings = SettingEnum;
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
