import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { ConfComponent } from './conf';
import { SurveyComponent } from './survey';
import { NoContentComponent } from './no-content';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { DataResolver } from './app.resolver';
import { AuthGuard } from './_guards';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login',  component: LoginComponent },
  { path: 'register',  component: RegisterComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'conf', component: ConfComponent },
  // { path: 'survey', component: SurveyComponent },
  { path: 'survey', loadChildren: './+survey#SurveyModule', canActivate: [AuthGuard]},
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
