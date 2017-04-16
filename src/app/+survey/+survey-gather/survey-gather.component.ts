import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { SurveyService } from '../../_services';
import { GatherDetialDialogComponent } from './gather-detail.dialog';

@Component({
  selector: 'd3f-survey-gather',
  templateUrl: 'survey-gather.component.html',
})
export class SurveyGatherComponent implements OnInit  {
  public gathers: any;

  constructor(
    private serveyService: SurveyService,
    private dialog: MdDialog
  ) {
    this.loadGathers();
  }

  public ngOnInit() {
    let editorOptions = { showEmbededSurveyTab: true };
  }
  public openDialog(gather) {
    // this.dialog.open( SurveyQrcodeDialogComponent, { position: 'center', data: { id } });
    let config = new MdDialogConfig();
    let dialogRef: MdDialogRef<GatherDetialDialogComponent> =
      this.dialog.open(GatherDetialDialogComponent, config);
    dialogRef.componentInstance.json = gather.content;
  }
  private loadGathers() {
    this.serveyService.getGathers().subscribe((gathers) => { this.gathers = gathers; });
  }
}
