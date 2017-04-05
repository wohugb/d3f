import { SurveyComponent } from './survey.component';

export const routes = [
  { path: '', children: [
    { path: '', component: SurveyComponent },
    { path: 'survey-editor', loadChildren: './+survey-editor#SurveyEditorModule' }
  ]},
];
