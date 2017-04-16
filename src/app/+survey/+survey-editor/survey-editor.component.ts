import { Component, OnInit } from '@angular/core';
import * as ko from 'knockout';
import * as SurveyEditor from 'surveyjs-editor';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, SurveyService } from '../../_services';
import { zhSurveyStrings } from '../../_helpers';

SurveyEditor.editorLocalization.locales['zh'] = zhSurveyStrings;
SurveyEditor.editorLocalization.currentLocale = 'zh';

@Component({
  selector: 'd3f-survey-viewer',
  template: `<div id='surveyEditorContainer'></div>`,
  styleUrls: ['survey-editor.component.scss']
})
export class SurveyEditorComponent implements OnInit {
  public editor: SurveyEditor.SurveyEditor;
  public urlPrefix: string;
  // public survey: JSON;
  public loading = false;
  private id: any;

  constructor(
    private http: Http,
    private router: Router,
    private route: ActivatedRoute,
    private surveyService: SurveyService,
    private alertService: AlertService
  ) {
    this.urlPrefix = 'http://api.d3f.pw/admin';
  }

  public ngOnInit() {
    let editorOptions = {
      showEmbededSurveyTab : false,
      showTestSurveyTab : false,
      showJSONEditorTab : true,
      // show the "Options" button menu. It is hidden by default
      showOptions: true,
      generateValidJSON: true,
    };
    this.editor = new SurveyEditor.SurveyEditor('surveyEditorContainer', editorOptions);
    this.editor.saveSurveyFunc = this.saveMySurvey;
    this.route.params.subscribe((params) => {
        this.id = params.id;
        this.getById();
    });
  }

  private getById() {
    this.surveyService.getById(this.id).subscribe((data) => {
      this.editor.text = JSON.stringify(data);
    });
  }
  private saveMySurvey = () => {
    this.loading = true;
    // this.http.post(this.urlPrefix + '/survey', { a: 'b' })
    //   .map((response: Response) => response.json());
    // let text = JSON.stringify(this.editor.text);
    let content = this.editor.text;
    content = content.replace(/\r?\n|\r/g, '');
    content = content.replace(/\s+/g, '');
    // content = content.replace(/\"/g, '\'');
    content = content.trim();
    // content = JSON.parse(content.toString());
    // console.log(content.toString());
    let dataPost = {
      content: this.editor.text,
      id: this.id
    };
    this.surveyService.save( dataPost ).subscribe(
          (data) => {
            this.router.navigate(['/survey/list']);
          },
          (error) => {
            this.alertService.error(error);
            this.loading = false;
          }
        );
  }
  private jwt() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ Authorization: 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers });
    }
  }
}
