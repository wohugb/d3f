import { SurveyEditorComponent } from './survey-editor.component';

export const routes = [
  { path: ':id', component: SurveyEditorComponent,  pathMatch: 'full' },
];
