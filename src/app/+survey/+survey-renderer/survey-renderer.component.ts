import { Component, Input, OnInit } from '@angular/core';
import * as Survey from 'survey-angular';

@Component({
  selector: 'survey-renderer',
  templateUrl: 'survey-renderer.component.html',
})
export class SurveyRendererComponent implements OnInit {
  @Input() public json: any;

  public ngOnInit() {
      let surveyModel = new Survey.ReactSurveyModel(this.json);
      Survey.SurveyNG.render('surveyElement', { model: surveyModel });
  }
}
