import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { SurveyService } from '../../_services';
import { SurveyModel } from '../../_models';
import { SurveyQrcodeDialogComponent } from './survey-qrcode-dialog';

@Component({
  selector: 'd3f-survey-list',
  templateUrl: 'survey-list.component.html',
})

export class SurveyListComponent implements OnInit  {
  public surveys: SurveyModel[] = [];
  public model;

  constructor(
    private serveyService: SurveyService,
    public dialog: MdDialog
  ) {
    this.model = {};
  }

  public ngOnInit() {
    this.loadAllSurveys();
  }

  public openDialog(survey) {
    // this.dialog.open( SurveyQrcodeDialogComponent, { position: 'center', data: { id } });
    let config = new MdDialogConfig();
    let dialogRef: MdDialogRef<SurveyQrcodeDialogComponent> =
      this.dialog.open(SurveyQrcodeDialogComponent, config);
    dialogRef.componentInstance.id = survey.id;
    dialogRef.componentInstance.qrcode = survey.qrcode;
  }

  public addSurvey(id) {
    this.serveyService.save(this.model).subscribe(() => { this.loadAllSurveys(); });
  }
  public deleteSurvey(id) {
    this.serveyService.delete(id).subscribe(() => { this.loadAllSurveys(); });
  }
  private loadAllSurveys() {
    this.serveyService.getAll().subscribe((surveys) => { this.surveys = surveys; });
  }
}
