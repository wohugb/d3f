import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './survey.routes';
import { SurveyComponent }  from './survey.component';

console.log('异步加载捆 `Survey` ');

@NgModule({
  declarations: [
    SurveyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class SurveyModule {
  public static routes = routes;
}
