import { SurveyRendererComponent } from './survey-renderer.component';

export const routes = [
  { path: ':id', component: SurveyRendererComponent,  pathMatch: 'full' },
];
