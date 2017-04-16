import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { routes } from './survey.routes';
import { SurveyComponent }  from './survey.component';
// import { SurveyEditorComponent } from './+survey-editor/survey-editor.component';
// import { SurveyListComponent } from './+survey-list/survey-list.component';
import { SurveyMenu } from './survey.menu';
import { SurveyDemo } from './survey.demo';

@NgModule({
  declarations: [
    SurveyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  providers: [ SurveyMenu, SurveyDemo ],
})
export class SurveyModule {
  public static routes = routes;
}
