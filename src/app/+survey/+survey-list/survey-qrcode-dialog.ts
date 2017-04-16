import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'survey-qrcode-dialog',
  templateUrl: 'survey-qrcode-dialog.html',
})
export class SurveyQrcodeDialogComponent {
  public id: string;
  public qrcode: string;
  constructor(public dialogRef: MdDialogRef<SurveyQrcodeDialogComponent>) { }
}
