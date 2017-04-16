import { Component, OnInit } from '@angular/core';
import { MdDialogRef, MdListItem } from '@angular/material';

@Component({
  selector: 'gather-detail.dialog',
  templateUrl: 'gather-detail.dialog.html',
})
export class GatherDetialDialogComponent {
  public json: string;
  constructor(public dialogRef: MdDialogRef<GatherDetialDialogComponent>) { }
  public keys() {
    return Object.keys(this.json);
  }
}
