import { Component, Input, OnInit } from '@angular/core';
import * as Survey from 'survey-angular';

@Component({
  selector: 'survey-renderer',
  template: `<div class="survey-container contentcontainer codecontainer">
    <div id="surveyElement"></div>
    </div>`,
})
export class SurveyComponent implements OnInit {
  @Input() json: any;

  public ngOnInit() {
      let surveyModel = new Survey.ReactSurveyModel(this.json);
      Survey.SurveyNG.render('surveyElement', { model: surveyModel });
  }
}
