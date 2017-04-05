import { Component, OnInit } from '@angular/core';
import * as ko from 'knockout';
import * as SurveyEditor from 'surveyjs-editor';

console.log('异步加载组件 `SurveyEditor`');

@Component({
  selector: 'survey-editor',
  template: `<div id="surveyEditorContainer"></div>`,
})
export class SurveyEditorComponent implements OnInit  {
  public editor: SurveyEditor.SurveyEditor;

  public ngOnInit() {
    let editorOptions = {showEmbededSurveyTab: true};
    this.editor = new SurveyEditor.SurveyEditor('surveyEditorContainer', editorOptions);
    this.editor.saveSurveyFunc = this.saveMySurvey;
  }

  private saveMySurvey = () => {
    console.log(JSON.stringify(this.editor.text));
  }
}
