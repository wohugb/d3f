import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { SurveyGatherComponent } from './survey-gather.component';
import { GatherDetialDialogComponent } from './gather-detail.dialog';
import { routes } from './survey-gather.routes';

@NgModule({
  declarations: [
    SurveyGatherComponent,
    GatherDetialDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  bootstrap: [SurveyGatherComponent, GatherDetialDialogComponent]
})
export class SurveyGatherModule {
  public static routes = routes;
}
