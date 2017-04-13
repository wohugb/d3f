import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Component({
  selector: 'd3f-survey-gatcher',
  templateUrl: 'survey-gatcher.component.html',
})
export class SurveyGatcherComponent implements OnInit  {

  private urlPrefix: string;

  constructor(private http: Http) {
    this.urlPrefix = 'http://api.d3f.pw/admin';
  }

  public ngOnInit() {
    let editorOptions = { showEmbededSurveyTab: true };
  }
}
