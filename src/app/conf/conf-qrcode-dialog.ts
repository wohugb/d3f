import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'conf-qrcode-dialog',
  templateUrl: 'conf-qrcode-dialog.html',
})
export class ConfQrcodeDialogComponent {
  public id: string;
  public qrcode: string;
  constructor(public dialogRef: MdDialogRef<ConfQrcodeDialogComponent>) { }
}

