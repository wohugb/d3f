import { SurveyComponent } from './survey.component';
import { AuthGuard } from '../_guards';

export const routes = [
  { path: '', children: [
    { path: '', component: SurveyComponent },
    { path: 'editor', loadChildren: './+survey-editor#SurveyEditorModule'
      , canActivate: [AuthGuard] },
    { path: 'list', loadChildren: './+survey-list#SurveyListModule'
      , canActivate: [AuthGuard] },
    { path: 'gather', loadChildren: './+survey-gather#SurveyGatherModule'
      , canActivate: [AuthGuard] },
    { path: 'renderer', loadChildren: './+survey-renderer#SurveyRendererModule'
      , canActivate: [AuthGuard] }
  ]},
];
