import { SurveyComponent } from './survey.component';
import { SurveyEditorComponent } from './+survey-editor/survey-editor.component';

export const routes = [
  { path: '',
    component: SurveyComponent,
    children: [
    { path: '', component: SurveyEditorComponent },
    { path: 'survey-editor', component: SurveyEditorComponent }
  ]},
];
