import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';

import { routes } from './survey-renderer.routes';
import { SurveyRendererComponent } from './survey-renderer.component';

@NgModule({
  declarations: [
    SurveyRendererComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class SurveyRendererModule {
  public static routes = routes;
  constructor(
    private route: ActivatedRoute) {
    this.route = route;
  }
}
