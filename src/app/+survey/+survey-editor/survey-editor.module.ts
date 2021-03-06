import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './survey-editor.routes';
import { SurveyEditorComponent } from './survey-editor.component';

@NgModule({
  declarations: [
    SurveyEditorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class SurveyEditorModule {
  public static routes = routes;
}
