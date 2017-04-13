import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './survey-list.routes';
import { SurveyListComponent } from './survey-list.component';

@NgModule({
  declarations: [
    SurveyListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class SurveyListModule {
  public static routes = routes;
}
