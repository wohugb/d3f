import { SurveyComponent } from './survey.component';

export const routes = [
  { path: '', children: [
    { path: '', component: SurveyComponent },
    { path: 'editor', loadChildren: './+survey-editor#SurveyEditorModule' },
    { path: 'list', loadChildren: './+survey-list#SurveyListModule' },
    { path: 'gatcher', loadChildren: './+survey-gatcher#SurveyGatcherModule' },
    { path: 'renderer', loadChildren: './+survey-renderer#SurveyRendererModule' }
  ]},
];
