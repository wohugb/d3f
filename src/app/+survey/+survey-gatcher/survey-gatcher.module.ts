import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './survey-gatcher.routes';
import { SurveyGatcherComponent } from './survey-gatcher.component';

@NgModule({
  declarations: [
    SurveyGatcherComponent,
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
