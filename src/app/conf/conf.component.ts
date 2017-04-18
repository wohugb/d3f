import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { ConfService } from './conf.service';
import { ConfModel } from './conf.model';
import { ConfQrcodeDialogComponent } from './conf-qrcode-dialog';

@Component({
  selector: 'd3f-conf',
  templateUrl: 'conf.component.html',
})

export class ConfComponent implements OnInit  {
  public confs: ConfModel[] = [];
  public model;

  constructor(
    private confService: ConfService,
    public dialog: MdDialog
  ) {
    this.model = {};
  }

  public ngOnInit() {
    this.loadAllConfs();
  }

  public openDialog(conf) {
    let config = new MdDialogConfig();
    let dialogRef: MdDialogRef<ConfQrcodeDialogComponent> =
      this.dialog.open(ConfQrcodeDialogComponent, config);
    dialogRef.componentInstance.id = conf.id;
    dialogRef.componentInstance.qrcode = conf.qrcode;
  }

  public addConf(id) {
    this.confService.save(this.model).subscribe(() => { this.loadAllConfs(); });
  }
  public deleteConf(id) {
    this.confService.delete(id).subscribe(() => { this.loadAllConfs(); });
  }
  private loadAllConfs() {
    this.confService.getAll().subscribe((confs) => { this.confs = confs; });
  }
}
